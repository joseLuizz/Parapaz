module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('socioeconomicocriancas', [
			{
        grupo_familiar: 'grupo2',
        condicao_moradia: 'grupo2',
        renda_familiar: 'grupo2',
        tipo_violencia: 'grupo2',
        createdAt: new Date(),
				updatedAt: new Date()
			},
			{
        grupo_familiar: 'grupo3',
        condicao_moradia: 'grupo3',
        renda_familiar: 'grupo3',
        tipo_violencia: 'grupo3',
        createdAt: new Date(),
				updatedAt: new Date()
			},

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('socioeconomicocriancas', null, {})
	}
}
