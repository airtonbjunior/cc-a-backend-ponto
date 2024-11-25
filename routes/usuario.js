const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Rota que recupera todos os usuários da aplicação
router.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.send(usuarios);
});


// Rota que recupera um usuário específico do banco de dados RELACIONAL
router.get('/usuario/:id_usuario', async (req, res) => {
    
    const usuario = await Usuario.findAll({
        where: {
          id_usuario: req.params.id_usuario, 
        },
    });

    res.send(usuario);
});


// Rota que cria um usuário
router.post('/usuario', async (req, res) => {

    const usuario = await Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        login: req.body.login,
        permissao: req.body.permissao
    });


    res.send(usuario);
});



router.put('/usuario/:id_usuario', async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id_usuario);

    // e se o usuário não existir?

    const usuarioAtualizado = await usuario.update({
        nome: req.body.nome,
        email: req.body.email,
        login: req.body.login,
        senha: req.body.senha,
        permissao: req.body.permissao
    });     

    res.json(usuarioAtualizado);
});


router.delete('/usuario/:id_usuario', async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id_usuario);

    // e se o usuário não existir?
    usuario.destroy();

    res.send(`Usuário com id ${req.params.id_usuario} deletado com sucesso`);

});


module.exports = router;