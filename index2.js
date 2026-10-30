const express = request('express');

const app = express();

let tarefas = [
    { tarefa: "compilar"},
    { tarefa: "testar"}
];

app.get(['/', '/tarefas'], (req, res) => {
    let conteudo = "<html><body><ul>";
    for (let t of tarefas) {
        conteudo += `<li>${t.tarefa}</li>`;
    }
})