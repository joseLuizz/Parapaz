'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('funcionario_atendimento', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      funcionario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'funcionarios', key:'id'}

      },
      atendimento_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'atendimentos', key:'id'}
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
    await queryInterface.dropTable('funcionario_atendimento');
  }
};