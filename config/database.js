const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize('name_of_database', 'username', 'password', {
    host: 'database_endpoint',
    dialect: 'postgres',
});

module.exports = sequelize;
