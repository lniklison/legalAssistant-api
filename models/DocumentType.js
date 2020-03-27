const Sequelize = require('sequelize');
const sql = require('../config/sql');

const DocumentType = sql.define('DocumentTypes', {
  name: Sequelize.STRING,
  slug: Sequelize.STRING
}, {
  timestamps: false
});

module.exports = DocumentType;
