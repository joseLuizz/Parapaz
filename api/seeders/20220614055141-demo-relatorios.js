module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('relatorios', [
			{
				Atendimentos: 'abuso sexual',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Atendimentos: 'violencia fisica',
				createdAt: new Date(),
				updatedAt: new Date()
			},
      {
				Atendimentos: 'carcere privado',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			/*{
				nome: 'Felipe Cardoso',
				ativo: true,
				email: 'felipe@felipe.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},*/

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('relatorios', null, {})
	}
}
