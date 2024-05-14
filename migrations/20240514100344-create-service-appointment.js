'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ServiceAppointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_time: {
        type: Sequelize.DATE
      },
      UserID: {
        type: Sequelize.INTEGER,
        references: {model: 'Users', key: 'id'}
      },
      ServiceID: {
        type: Sequelize.INTEGER,
        references: {model: 'Services', key: 'id'}
      },
      status: {
        type: Sequelize.STRING
      },
      is_aproved: {
        type: Sequelize.BOOLEAN
      },
      approved_by: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ServiceAppointments');
  }
};