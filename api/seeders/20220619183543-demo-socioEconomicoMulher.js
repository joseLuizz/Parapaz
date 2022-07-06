module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('socioeconomicomulhers', [
			{
        grupo_familiar: "posui",
        condicao_moradia: "casa consruida",
        renda_familiar: "400",
        createdAt: new Date(),
				updatedAt: new Date()
			},
			{
        grupo_familiar: "possui",
        condicao_moradia: "casa construida",
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
