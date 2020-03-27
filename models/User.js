const Sequelize = require('sequelize');
const sql = require('../config/sql');
const DocumentType = require('./DocumentType');
const Case = require('./Case');

const User = sql.define('Users', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    document: Sequelize.INTEGER,
    documentTypeId: Sequelize.INTEGER,
    password: Sequelize.STRING,
    active: Sequelize.INTEGER
});

User.belongsTo(DocumentType, { foreignKey: 'documentTypeId', as: 'documentType' });
User.belongsToMany(Case, { through: 'CaseUser', foreignKey: 'userId', as: 'user' });

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

User.checkActiveStatus = (id) => {
    return User.findOne({
        where: {
            id: id
        },
        attributes: ['active']
    });
};

User.isIdUnique = async (id) => {
    let count = await User.count({ where: { id: id } });

    return count !== 0;
};


module.exports = User;
