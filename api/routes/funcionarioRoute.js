const { Router } = require('express')
const FuncionarioController = require('../controllers/FuncionarioController')

const router = Router()

router.get('/funcionario', FuncionarioController.pegaTodosFuncionario)
router.get('/funcionario/:id', FuncionarioController.pegaUmFuncionario)
router.post('/funcionario', FuncionarioController.criaFuncionario)
router.put('/funcionario/:id', FuncionarioController.atualizaFuncionario)
router.delete('/funcionario/:id', FuncionarioController.apagaFuncionario)


module.exports = router