"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Watches",
      [
        {
          name: "Super-watches",
          price: 4000,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNQj3UKYEgTT-JtQN3qjdjlnowTe6N7LSTg&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alfa-watches",
          price: 5000,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytVbFOAlymRay1lDCtqiUaq61eKSvd3Ln7w&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Watches", null, {});
  },
};
