'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('animals','description', {
        allowNull: false,
        type: Sequelize.TEXT,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('animals','description');
  }
};