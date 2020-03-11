'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DocumentTypes', [{
      name: 'Dni',
      slug: 'dni'
    }, {
      name: 'Cuil',
      slug: 'cuil'
    }, {
      name: 'Cuit',
      slug: 'cuit'
    }, {
      name: 'Pasaporte',
      slug: 'passport'
    }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DocumentTypes', null, {});
  }
};
