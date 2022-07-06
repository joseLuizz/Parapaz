'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('violenciaCriancas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quem_notificou: {
        type: Sequelize.STRING
      },
      orgao_encaminhou: {
        type: Sequelize.STRING
      },
      abuso_sexual: {
        type: Sequelize.STRING
      },
      tipo_lesao: {
        type: Sequelize.STRING
      },
      marcas_pelo_corpo: {
        type: Sequelize.STRING
      },
      vitima_ficou_internada: {
        type: Sequelize.STRING
      },
      agravantes_do_caso: {
        type: Sequelize.STRING
      },
      transtorno_deficiencia: {
        type: Sequelize.STRING
      },
      local_acontecimento: {
        type: Sequelize.STRING
      },
      info_agressor: {
        type: Sequelize.STRING
      },
      fatores_de_risco: {
        type: Sequelize.STRING
      },
      relacao_com_vitima: {
        type: Sequelize.STRING
      },
      evolucao_do_caso: {
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
    await queryInterface.dropTable('violenciaCriancas');
  }
};