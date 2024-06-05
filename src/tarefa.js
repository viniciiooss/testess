class Tarefa {
    constructor() {
      this.tarefas = [];
    }
  
    adicionarTarefa(descricao) {
      this.tarefas.push({
        descricao,
        concluida: false,
      });
    }
  
    removerTarefa(index) {
      this.tarefas.splice(index, 1);
    }
  
    marcarTarefaConcluida(index) {
      this.tarefas[index].concluida = true;
    }
  
    obterTarefas() {
      return this.tarefas;
    }
  
    filtrarTarefasPorStatus(status) {
      return this.tarefas.filter(tarefa => tarefa.concluida === status);
    }
  }
  
  module.exports = Tarefa; 