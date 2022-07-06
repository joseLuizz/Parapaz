module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('perfils', [
			{
				tipo: 'cordenadores',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				tipo: 'auxiliar',
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
		return queryInterface.bulkDelete('perfils', null, {})
	}
}
