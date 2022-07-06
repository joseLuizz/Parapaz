const { Router } = require('express')
const FuncionarioController = require('../controllers/FuncionarioController')

const router = Router()

router.get('/funcionario', FuncionarioController.pegaTodosFuncionario)
router.get('/funcionario/:id', FuncionarioController.pegaUmFuncionario)
router.post('/funcionario', FuncionarioController.criaFuncionario)
router.put('/funcionario/:id', FuncionarioController.atualizaFuncionario)
router.delete('/funcionario/:id', FuncionarioController.apagaFuncionario)
/*router.get('/Funcionario/:estudanteId/matricula/:matriculaId',  FuncionarioController.pegaUmaMatricula)
router.post('/Funcionario/:estudanteId/matricula', FuncionarioController.criaMatricula)
router.put('/Funcionario/:estudanteId/matricula/:matriculaId',  FuncionarioController.atualizaMatricula)
router.delete('/Funcionario/:estudanteId/matricula/:matriculaId',  FuncionarioController.apagaMatricula)*/

module.exports = router