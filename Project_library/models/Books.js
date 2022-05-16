const { DataTypes } = require('sequelize');

const db = require("../db/conn");

const books = db.define('books', {
    idBook:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING
    },
    pages:{
        type: DataTypes.INTEGER
    }
});

module.exports = books;