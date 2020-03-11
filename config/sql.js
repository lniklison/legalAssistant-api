const Sequelize = require('sequelize');
const Config = require('./config');

let config = Config.development;

module.exports = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
});


