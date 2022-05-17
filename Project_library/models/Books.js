const { DataTypes } = require('sequelize');

const db = require("../db/conn");

const Books = db.define('Books', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        required: true,
    },
    pages:{
        type: DataTypes.INTEGER,
        required: true,
    },
});

module.exports = Books;