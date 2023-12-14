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
          img: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alfa-watches",
          price: 5000,
          img: "https://images.unsplash.com/photo-1612817159450-08a180df028b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mega-watches",
          price: 6000,
          img: "https://images.unsplash.com/photo-1619976491498-f2dadb25fb3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Giga-watches",
          price: 4000,
          img: "https://images.unsplash.com/photo-1612042850052-22573fcd0bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Beta-watches",
          price: 2000,
          img: "https://images.unsplash.com/photo-1615860756652-d1efbcb5d784?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHx3YXRjaGVzfGVufDB8fDB8fHww",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Trex-watches",
          price: 3000,
          img: "https://images.unsplash.com/photo-1618151443723-e2c62836c7fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHx3YXRjaGVzfGVufDB8fDB8fHww",
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
