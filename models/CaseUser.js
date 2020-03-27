const Sequelize = require('sequelize');
const sql = require('../config/sql');
const User = require('./User');
const Case = require('./Case');
const CaseUserRole = require('./CaseUserRole');

const CaseUser = sql.define('CaseUser', {
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  caseId: {
    type: Sequelize.INTEGER,
    references: {
      model: Case,
      key: 'id'
    }
  },
  codeId: {
    type: Sequelize.INTEGER,
    references: {
      model: CaseUserRole,
      key: 'id'
    }
  }
}, { timestamps: false });

CaseUser.belongsTo(CaseUserRole, {foreignKey: 'RoleId' ,as: 'roleId'});

module.exports = CaseUser;
