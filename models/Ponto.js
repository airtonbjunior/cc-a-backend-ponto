const { DataTypes, DATE } = require('sequelize');
const sequelize = require('../config/db');

const Ponto = sequelize.define('Ponto', {
    id_ponto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.ENUM('E', 'S', 'I', 'V'),
        allowNull: false
    },
    passado: {
        type: DataTypes.BOOLEAN
    },
    editado: {
        type: DataTypes.BOOLEAN
    },
    localizacao: {
        type: DataTypes.STRING
    },
    dataHora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        key: 'id_usuario'
    }
},
{
    timestamps: true
});


module.exports = Ponto;