'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('atendimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeVitima: {
        type: Sequelize.STRING
      },
      nomeFuncionario: {
        type: Sequelize.STRING
      },
      registroCrianca_id: {
        type: Sequelize.INTEGER,
        references: {model:'vitimaCriancas', key:'id'}
      },
      registroMulher_id: {
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
    await queryInterface.dropTable('atendimentos');
  }
};