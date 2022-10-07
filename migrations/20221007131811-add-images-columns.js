'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('animals','mainImage', {
        allowNull: false,
        type: Sequelize.STRING,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    );
    await queryInterface.addColumn('animals','extraImages', {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.STRING),
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('animals','mainImage');
    await queryInterface.removeColumn('animals','extraImages');
  }
};
