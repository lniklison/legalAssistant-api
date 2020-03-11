let Sequelize = require('sequelize');
let sql = require('../config/sql');
const DocumentType = require('../models/DocumentType');

const User = sql.define('Users', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    document: Sequelize.INTEGER,
    documentTypeId: Sequelize.INTEGER,
    password: Sequelize.STRING,
    active: Sequelize.INTEGER
});

User.belongsTo(DocumentType, {foreignKey: 'documentTypeId' ,as: 'documentType'});

User.findById = (id) => {
    return  User.findOne({
        where: {
            id: id
        },
        include: 'documentType'
    });
};

User.findByEmail = (email) => {
    return  User.findOne({
        where: {
            email: email
        },
        include: 'documentType'
    });
};

User.checkActiveStatus = async (id) => {
    return User.findOne({
        where: {
            id: id
        },
        attributes: ['active']
    });
};

module.exports = User;
