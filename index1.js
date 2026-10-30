const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.json({mensagem: "Alo mundo"});
});

app.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000');
});