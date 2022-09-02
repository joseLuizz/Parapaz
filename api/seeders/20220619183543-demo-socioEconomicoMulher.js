module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('socioeconomicomulhers', [
			{
				grupo_familiar: "posui",
				condicao_moradia: "Precaria",
				renda_familiar: "1500",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				grupo_familiar: "possui",
				condicao_moradia: "OK",
				renda_familiar: "4700",
				createdAt: new Date(),
				updatedAt: new Date()
			},

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('socioeconomicomulhers', null, {})
	}
}
