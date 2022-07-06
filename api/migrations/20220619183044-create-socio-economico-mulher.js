'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('socioEconomicoMulhers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      grupo_familiar: {
        type: Sequelize.STRING
      },
      condicao_moradia: {
        type: Sequelize.STRING
      },
      renda_familiar: {
        type: Sequelize.INTEGER
      },
      registro_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'vitimaMulhers', key:'id'}
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
    await queryInterface.dropTable('socioEconomicoMulhers');
  }
};