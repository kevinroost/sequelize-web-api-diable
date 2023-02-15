'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('UniqueItems', 'UniqueWeapons')
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('UniqueWeapons', 'UniqueItems')

  }
};
