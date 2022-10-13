module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        id: 1,
        title: " Clear Play Wheel",
        price: 20,
        mainImage: "hampsterwheel",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Guacamole & Chips Plush Toy",
        price: 8,
        mainImage:"guactoy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "Wooden Rabbit Castle",
        price: 30,
        mainImage: "rabbitcastle",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: "Ice Cream Squeaky Toy",
        price: 6,
        mainImage: "icecreamtoy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: "Mushroom Scratching Post",
        price: 695,
        mainImage:"scratchingpost",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
