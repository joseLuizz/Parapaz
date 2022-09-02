module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('atendimentos', [
			{
				nomeVitima: 'Joana Silva',
        		nomeFuncionario: 'Amanda Borges',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nomeVitima: 'Carol Torres',
				nomeFuncionario: 'Maria Joaquina',  
        		createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nomeVitima: 'Valdira Nunes',
				nomeFuncionario: 'Amanda Borges',  
        		createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nomeVitima: 'Enzo Brito',
				nomeFuncionario: 'Amanda Borges',  
        		createdAt: new Date(),
				updatedAt: new Date()
			},
			

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('atendimentos', null, {})
	}
}
