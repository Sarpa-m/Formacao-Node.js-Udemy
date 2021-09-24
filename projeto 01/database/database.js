const  Sequelize = require('sequelize');

var connection = new Sequelize('perguntas','perguntas','12ma12ma12ma12ma',{
    host: 'localhost',
    dialect: 'mysql'
}) ;

module.exports = connection;