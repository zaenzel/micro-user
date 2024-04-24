"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "windah",
        profession: "Admin Micro",
        role: "admin",
        email: "windahbasudara@gmail.com",
        password: await bcrypt.hash("qwerty123", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "basudara",
        profession: "Student Micro",
        role: "student",
        email: "basudarawindah@gmail.com",
        password: await bcrypt.hash("qwerty123", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
