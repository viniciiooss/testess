const Tarefa = require('./tarefa'); // Importação da classe Tarefa

describe('Tarefa', () => {
  let tarefa;

  beforeEach(() => {
    tarefa = new Tarefa();
  });

  test('adicionarTarefa should add a new task', () => {
    tarefa.adicionarTarefa('Fazer compras');
    expect(tarefa.obterTarefas()).toEqual([
      { descricao: 'Fazer compras', concluida: false },
    ]);
  });

  test('removerTarefa should remove a task by index', () => {
    tarefa.adicionarTarefa('Lavar roupa');
    tarefa.adicionarTarefa('Pagar contas');
    tarefa.removerTarefa(1);
    expect(tarefa.obterTarefas()).toEqual([
      { descricao: 'Lavar roupa', concluida: false },
    ]);
  });

  test('marcarTarefaConcluida should mark a task as completed', () => {
    tarefa.adicionarTarefa('Estudar');
    tarefa.marcarTarefaConcluida(0);
    expect(tarefa.obterTarefas()).toEqual([
      { descricao: 'Estudar', concluida: true },
    ]);
  });

  test('obterTarefas should return all tasks', () => {
    tarefa.adicionarTarefa('Caminhada');
    tarefa.adicionarTarefa('Cozinhar');
    expect(tarefa.obterTarefas()).toEqual([
      { descricao: 'Caminhada', concluida: false },
      { descricao: 'Cozinhar', concluida: false },
    ]);
  });

  test('filtrarTarefasPorStatus should return tasks with the specified status', () => {
    tarefa.adicionarTarefa('Ler livro');
    tarefa.adicionarTarefa('Arrumar quarto');
    tarefa.marcarTarefaConcluida(0);
    expect(tarefa.filtrarTarefasPorStatus(true)).toEqual([
      { descricao: 'Ler livro', concluida: true },
    ]);
    expect(tarefa.filtrarTarefasPorStatus(false)).toEqual([
      { descricao: 'Arrumar quarto', concluida: false },
    ]);
  });
});