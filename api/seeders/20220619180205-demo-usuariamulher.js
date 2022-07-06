module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('usuariamulhers', [
			{
        nome: "nao",
        telefone: 454375325,
        endereco: "nao",
        estado_civil: "nao",
        relacao_sexual_com: "nao",
        transtorno_deficiencia: "nao",
        situacao_ocupacional: "nao",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
        nome: "sim",
        telefone: 122787687,
        endereco: "nao",
        estado_civil: "sim",
        relacao_sexual_com: "nao",
        transtorno_deficiencia: "nao",
        situacao_ocupacional: "nao",
				createdAt: new Date(),
				updatedAt: new Date()

			},

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('usuariamulhers', null, {})
	}
}
