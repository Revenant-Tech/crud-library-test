const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library', 'root', '',{
    host:'localhost',
    dialect: 'mysql',
})

try{
    sequelize.authenticate()
    console.log('Conected in MySQL!')

} catch(error){
    console.log(`Don't be possible conect: ${error}`)
}

exports.default = sequelize