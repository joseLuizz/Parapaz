module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('violenciaCriancas', [
      {
        quem_notificou: 'sim',
        orgao_encaminhou: 'sim',
        abuso_sexual: 'sim',
        tipo_lesao: 'sim',
        marcas_pelo_corpo: 'sim',
        vitima_ficou_internada: 'sim',
        agravantes_do_caso: 'sim',
        transtorno_deficiencia: 'sim',
        local_acontecimento: 'sim',
        info_agressor: 'sim',
        fatores_de_risco: 'sim',
        relacao_com_vitima: 'sim',
        evolucao_do_caso: 'sim',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('violenciaCriancas', null, {})
  }
}
