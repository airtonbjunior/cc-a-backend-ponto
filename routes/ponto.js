const express = require('express');
const router = express.Router();
const Ponto = require('../models/Ponto');


router.get('/pontos', async (req, res) => {
    const pontos = await Ponto.findAll();

    res.json(pontos);
});


router.get('/ponto/:id_ponto', async(req, res) =>{
    const ponto = await Ponto.findByPk(req.params.id_ponto);

    // e se o ponto não existir?

    res.json(ponto);
});


router.post('/ponto', async (req, res) => {
    const ponto = await Ponto.create({
        tipo: req.body.tipo,
        dataHora: req.body.dataHora,
        id_usuario: req.body.id_usuario,
        localizacao: req.body.localizacao
    });

    res.json(ponto);
});


router.put('/ponto/:id_ponto', async (req, res) => {
    const ponto = await Ponto.findByPk(req.params.id_ponto);

    // e se o ponto não existir?

    const pontoAtualizado = await ponto.update({
        tipo: req.body.tipo,
        dataHora: req.body.dataHora
    });

    res.json(pontoAtualizado);
});

router.delete('/ponto/:id_ponto', async (req, res) => {
    const ponto = await Ponto.findByPk(req.params.id_ponto);

    // e se o ponto não existir?
    ponto.destroy();

    res.send(`O ponto com id ${req.params.id_ponto} foi deletado com sucesso!`);
});


// TO-DO:
// Fazer rota que traga todos pontos de um usuário específico
// /pontos/usuario/:id_usuario
// /pontos/:id_usuario


module.exports = router;