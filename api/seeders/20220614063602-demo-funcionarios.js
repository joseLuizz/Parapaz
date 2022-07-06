module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('funcionarios', [
			{
				Nome: 'Mohamed',
        Cargo: 'cordenador',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Nome: 'Primavera',
				Cargo: 'voluntario',  
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
