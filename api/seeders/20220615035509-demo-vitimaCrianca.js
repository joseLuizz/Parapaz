module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('vitimaCriancas', [
			{
				data: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				data: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},


		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('vitimaCriancas', null, {})
	}
}
