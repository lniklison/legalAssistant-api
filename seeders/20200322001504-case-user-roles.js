'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('CaseUserRoles', [{
      name: 'Representante',
      slug: 'representant'
    }, {
      name: 'Cliente',
      slug: 'client'
    }, {
      name: 'Contraparte',
      slug: 'counterpart'
    }
    ]);
  },

  down: () => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
