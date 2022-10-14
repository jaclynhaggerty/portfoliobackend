'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('applications','hasOtherPets', {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
  );
  await queryInterface.addColumn('applications','hasChildren', {
    allowNull: false,
    type: Sequelize.BOOLEAN,
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
);
await queryInterface.addColumn('applications','hasYard', {
  allowNull: false,
  type: Sequelize.BOOLEAN,
  onUpdate: "CASCADE",
  onDelete: "SET NULL",
},
);
await queryInterface.addColumn('applications','hasFreeTime', {
  allowNull: false,
  type: Sequelize.BOOLEAN,
  onUpdate: "CASCADE",
  onDelete: "SET NULL",
},
);
await queryInterface.addColumn('applications','canContact', {
  allowNull: false,
  type: Sequelize.BOOLEAN,
  onUpdate: "CASCADE",
  onDelete: "SET NULL",
},
);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('applications','hasOtherPets');
    await queryInterface.removeColumn('applications','hasChildren');
    await queryInterface.removeColumn('applications','hasYard');
    await queryInterface.removeColumn('applications','hasFreeTime');
    await queryInterface.removeColumn('applications','canContact');
  }
};
