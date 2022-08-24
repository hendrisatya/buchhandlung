'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('publishers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      founded: {
        type: Sequelize.DATE
      },
      countryOfOrigin: {
        type: Sequelize.STRING
      },
      headquarter: {
        type: Sequelize.STRING
      },
      homePage: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('publishers');
  }
};