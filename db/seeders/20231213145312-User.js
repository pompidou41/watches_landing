"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: "John@John",
          phone: 38221660,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShHXndXDhWZkdtoL0f4uK5y6KEHCGNDSTVMg&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria Vue",
          email: "Maria@Maria",
          phone: 65731660,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24LZGUxoxA-MKU1Qy-W06iJ8WmxYPT78CzQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
