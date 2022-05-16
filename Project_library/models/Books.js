const { DataTypes } = require('sequelize');

const db = require("../db/conn");

const Books = db.define('Books', {
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