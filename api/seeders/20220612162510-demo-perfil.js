module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('perfils', [
			{
				tipo: 'cordenador',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				tipo: 'auxiliar adm',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				tipo: 'Psicologa',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				tipo: 'Assistente social',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('perfils', null, {})
	}
}
