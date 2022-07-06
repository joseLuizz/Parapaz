module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('usuariocriancas', [
			{
				nome: 'Mohamed',
        endereco: 'Rua 25',
        mae: 'Marinalva',
        Pai: 'Robinho',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Primavera',
        endereco: 'Rua 14',
        mae: 'Dilma',
        Pai: 'Lula',
        createdAt: new Date(),
				updatedAt: new Date()
			},

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('usuariocriancas', null, {})
	}
}
