"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "animals",
      [
        {
          name: "Petunia",
          age: 1,
          species: "Hedgehog",
          createdAt: new Date(),
          updatedAt: new Date(),
          adopted: false,
        }, 
        {
          name: "Thumbs",
          age: 1,
          species: "Cat",
          createdAt: new Date(),
          updatedAt: new Date(),
          adopted: false,
        },  
        {
          name: "Hank",
          age: 1,
          species: "Dog",
          createdAt: new Date(),
          updatedAt: new Date(),
          adopted: false,
        },   
        {
          name: "Jolene",
          age: 1,
          species: "Rabbit",
          createdAt: new Date(),
          updatedAt: new Date(),
          adopted: false,
        },  
        {
          name: "Stroopwafel",
          age: 1,
          species: "Dog",
          createdAt: new Date(),
          updatedAt: new Date(),
          adopted: false,
        },  
        {
          name: "Gustav",
          age: 1,
          species: "Bearded Dragon",
          createdAt: new Date(),
          updatedAt: new Date(),
          adopted: false,
        },   
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("animals", null, {});
  },
};