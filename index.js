const express = require('express');
const app = express();

const sequelize = require('./config/db');
const Usuario = require('./models/Usuario');
const Ponto = require('./models/Ponto');


sequelize.sync({ alter: true })
    .then(() => {
        console.log("SUCESSO!");
    })
    .catch(error => {
        console.log(`Erro ao sincronizar as tabelas - ${error}`);
    });


Ponto.create({ tipo: 'I', dataHora: 'sfsdfsdfgsdfgsdfgdsfgss' });



// app.METODO('rota/caminho', (req, res) => {})

app.get('/users', (req, res) => {
    res.send("Nessa rota vou retornar os usuários");
});

app.post('/users', (req, res) => {
    res.send("Rota users usando post");
});

app.get('/user/:id', (req, res) => {
    res.send(`o parâmetro é ${req.params.id}`)
});

app.post('/user/:id1-:id2', (req, res) => {
    res.send(req.params);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor web ouvindo na porta ${PORT}`);
});