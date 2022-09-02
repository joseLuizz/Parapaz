module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('usuariocriancas', [
			{
				nome: 'Rafael Silva',
				endereco: 'Rua 25',
				mae: 'Marinalva Silva',
				Pai: 'Robson Oliveira',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Valdira Nunes',
				endereco: 'Rua 14',
				mae: 'Dilma Araujo',
				Pai: 'Luis Camargo',
        		createdAt: new Date(),
				updatedAt: new Date()
			},

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('usuariocriancas', null, {})
	}
}
