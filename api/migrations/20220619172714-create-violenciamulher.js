'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('violenciaMulhers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quem_notificou: {
        type: Sequelize.STRING
      },
      tipo_violencia: {
        type: Sequelize.STRING
      },
      ocorreu_penetracao: {
        type: Sequelize.STRING
      },
      meio_de_agressao: {
        type: Sequelize.STRING
      },
      tipo_lesao: {
        type: Sequelize.STRING
      },
      area_corpo_atingiada: {
        type: Sequelize.STRING
      },
      local_ocorrencia: {
        type: Sequelize.STRING
      },
      ocorreu_outras_vezes: {
        type: Sequelize.STRING
      },
      info_sobre_agressor: {
        type: Sequelize.STRING
      },
      situacao_ocupacional: {
        type: Sequelize.STRING
      },
      numero_envolvidos: {
        type: Sequelize.STRING
      },
      suspeita_drogas_alcool: {
        type: Sequelize.STRING
      },
      vinculo_parentesco: {
        type: Sequelize.STRING
      },
      acompanhamento_evolucao: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('violenciaMulhers');
  }
};