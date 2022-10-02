"use strict";
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Naomi",
          email: "naomi@gmail.com",
          phone: 1234567,
          password: bcrypt.hashSync("naomi", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: false,
        }, 
        {
          name: "Alex",
          email: "alex@gmail.com",
          phone: 1234567,
          password: bcrypt.hashSync("alex", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: false,
        },  
        {
          name: "Simon",
          email: "Simon@gmail.com",
          phone: 1234567,
          password: bcrypt.hashSync("coco", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: false,
        },   
        {
          name: "admin",
          email: "admin@gmail.com",
          phone: 1234567,
          password: bcrypt.hashSync("admin", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: true,
        },   
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};