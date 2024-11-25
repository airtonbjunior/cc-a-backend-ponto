const express = require('express');
const app = express();
const cors = require('cors');

const sequelize = require('./config/db');
const Usuario = require('./models/Usuario');
const Ponto = require('./models/Ponto');
const usuarioRoutes = require('./routes/usuario')
const pontoRoutes = require('./routes/ponto');

const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/', usuarioRoutes);
app.use('/', pontoRoutes);

Usuario.hasMany(Ponto, {
    foreignKey: "id_usuario"
});

Ponto.belongsTo(Usuario, {
    foreignKey: "id_usuario"
})


sequelize.sync({ alter: true })
    .then(() => {
        console.log("SUCESSO!");
    })
    .catch(error => {
        console.log(`Erro ao sincronizar as tabelas - ${error}`);
    });


app.listen(PORT, () => {
    console.log(`Servidor web ouvindo na porta ${PORT}`);
});