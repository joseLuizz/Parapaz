module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('violenciaMulhers', [
      {
        quem_notificou: "sim",
        tipo_violencia: "sim",
        ocorreu_penetracao: "sim",
        meio_de_agressao: "sim",
        tipo_lesao: "sim",
        area_corpo_atingiada: "sim",
        local_ocorrencia: "sim",
        ocorreu_outras_vezes: "sim",
        info_sobre_agressor: "sim",
        situacao_ocupacional: "sim",
        numero_envolvidos: "sim",
        suspeita_drogas_alcool: "sim",
        vinculo_parentesco: "sim",
        acompanhamento_evolucao: "sim",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('violenciaMulhers', null, {})
  }
}
