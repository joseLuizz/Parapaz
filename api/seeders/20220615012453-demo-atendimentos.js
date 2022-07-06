module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('atendimentos', [
			{
				nomeVitima: 'Mohamed',
        nomeFuncionario: 'aux',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nomeVitima: 'Primavera',
				nomeFuncionario: 'voluntario',  
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
		return queryInterface.bulkDelete('atendimentos', null, {})
	}
}
