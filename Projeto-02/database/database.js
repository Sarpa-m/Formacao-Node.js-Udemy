const Sequelize = require('sequelize');

var connection = new Sequelize('p2', 'userP2', 'userP2userP2', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;