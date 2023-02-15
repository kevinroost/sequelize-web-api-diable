'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()
    await queryInterface.bulkInsert('Characters', [{
      name: 'Kevin',
      class: 'Barbarian',
      level: -1,
      createdAt: date,
      updatedAt: date
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Characters', null, {})
  }
};
