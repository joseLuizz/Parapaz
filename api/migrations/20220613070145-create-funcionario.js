'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome: {
        type: Sequelize.STRING
      },
      Cargo: {
        type: Sequelize.STRING
      },

      // id_relatorio: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {model:'relatorios', key:'id'}
      // },
      // perfil_id: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {model:'Perfils', key:'id'}
      // },
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
    await queryInterface.dropTable('funcionarios');
  }
};