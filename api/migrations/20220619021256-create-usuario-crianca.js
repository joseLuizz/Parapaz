'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarioCriancas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      mae: {
        type: Sequelize.STRING
      },
      pai: {
        type: Sequelize.STRING
      },
      responsavel: {
        type: Sequelize.STRING
      },
      registro_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'vitimaCriancas', key:'id'}
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
    await queryInterface.dropTable('usuarioCriancas');
  }
};