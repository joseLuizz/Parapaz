module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('usuariamulhers', [
			{
				nome: "Ludmila Castro",
				telefone: 454375325,
				endereco: "rua 13",
				estado_civil: "Solteira",
				relacao_sexual_com: "nenhum",
				transtorno_deficiencia: "nao",
				situacao_ocupacional: "vendedora",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: "Bruno Gomes",
				telefone: 122787687,
				endereco: "Rua bahia",
				estado_civil: "casada",
				relacao_sexual_com: "marido",
				transtorno_deficiencia: "nao",
				situacao_ocupacional: "dona de casa",
				createdAt: new Date(),
				updatedAt: new Date()

			},

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('usuariamulhers', null, {})
	}
}
