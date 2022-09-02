module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('funcionarios', [
			{
				Nome: 'Tabata Amaral',
       			 Cargo: 'cordenador',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Nome: 'Leonardo Silva',
				Cargo: 'Auxiliar administrativo',  
        		createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Nome: 'Amanda Borges',
				Cargo: 'Psicologa',  
        		createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Nome: 'Maria Joaquina',
				Cargo: 'Assistente social',  
        		createdAt: new Date(),
				updatedAt: new Date()
			},
			/*{
				Nome: 'Felipe Cardoso',
				ativo: true,
				email: 'felipe@felipe.com',
				role: 'estudante',
		
    	tipo: 'cordenadores',    createdAt: new Date(),
				updatedAt: new Date()
			},*/

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('funcionarios', null, {})
	}
}
