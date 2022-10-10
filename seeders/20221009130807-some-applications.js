'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'applications',
      [{
        userId: 1,
        animalId: 1,
        approved: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        userId: 2,
        animalId: 2,
        approved: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        userId: 1,
        animalId: 3,
        approved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        userId: 3,
        animalId: 5,
        approved: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('applications', null, {});
  }
};
