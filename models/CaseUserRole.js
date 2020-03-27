let Sequelize = require('sequelize');
let sql = require('../config/sql');

const CaseUserRole = sql.define('CaseUserRoles', {
  name: Sequelize.STRING,
  slug: Sequelize.STRING
}, {});

module.exports = CaseUserRole;
