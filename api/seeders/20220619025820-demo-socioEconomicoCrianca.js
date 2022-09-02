module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('socioeconomicocriancas', [
			{
				grupo_familiar: 'grupo2',
				condicao_moradia: 'Precaria',
				renda_familiar: '4000',
				tipo_violencia: 'fisica',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				grupo_familiar: 'grupo3',
				condicao_moradia: 'Ruim',
				renda_familiar: '1200',
				tipo_violencia: 'psicologica',
				createdAt: new Date(),
				updatedAt: new Date()
			},

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('socioeconomicocriancas', null, {})
	}
}
