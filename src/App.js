// src/App.js
import React from 'react';
import calculator from './calculator';

function App() {
    let result;
    try {
        result = calculator('unknown', 1, 1); // Exemplo de operação inválida
    } catch (error) {
        result = error.message; // Captura e exibe a mensagem de erro
    }

    return (
        <div>
            <h1>Calculadora</h1>
            <p>Resultado: {result}</p>
        </div>
    );
}

export default App;
