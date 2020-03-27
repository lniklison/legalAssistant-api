const Sequelize = require('sequelize');
const sql = require('../config/sql');

const Case = sql.define('Cases', {
  code: Sequelize.STRING,
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  startDate: Sequelize.STRING,
  active: Sequelize.INTEGER
});

 module.exports = Case;
