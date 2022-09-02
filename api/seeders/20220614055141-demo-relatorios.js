module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('relatorios', [
			{
				Atendimentos: 'relatorio 1',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Atendimentos: 'relatorio 2',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Atendimentos: 'relatorio 3',
				createdAt: new Date(),
				updatedAt: new Date()
			},
      		{
				Atendimentos: 'relatorio 4',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('relatorios', null, {})
	}
}
