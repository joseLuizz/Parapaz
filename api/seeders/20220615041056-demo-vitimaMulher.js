module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('vitimaMulhers', [
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
		return queryInterface.bulkDelete('vitimaMulhers', null, {})
	}
}
