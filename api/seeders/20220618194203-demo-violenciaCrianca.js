module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('violenciaCriancas', [
      {
        quem_notificou: 'Parapaz',
        orgao_encaminhou: 'Cras',
        abuso_sexual: 'sim',
        tipo_lesao: 'fisica',
        marcas_pelo_corpo: 'braços e costas',
        vitima_ficou_internada: 'não',
        agravantes_do_caso: 'nenhum',
        transtorno_deficiencia: 'não',
        local_acontecimento: 'Casa',
        info_agressor: 'Padrastro',
        fatores_de_risco: 'Observação',
        relacao_com_vitima: 'nao',
        evolucao_do_caso: 'nenhum comentario ainda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quem_notificou: 'Parapaz',
        orgao_encaminhou: 'Conselho tutelar',
        abuso_sexual: 'nao',
        tipo_lesao: 'fisica',
        marcas_pelo_corpo: 'braços rosto e costas',
        vitima_ficou_internada: 'sim',
        agravantes_do_caso: 'nenhum',
        transtorno_deficiencia: 'não',
        local_acontecimento: 'Casa do Tio',
        info_agressor: 'Amigo da familia',
        fatores_de_risco: 'sim',
        relacao_com_vitima: 'nao',
        evolucao_do_caso: 'nenhum comentario ainda',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('violenciaCriancas', null, {})
  }
}
