const { Router } = require('express')
const Funcionario_atendimentoController = require('../controllers/Funcionario_atendimentoController')

const router = Router()

router.get('/Funcionario_atendimento', Funcionario_atendimentoController.pegaTodosFuncionario_atendimento)
router.get('/Funcionario_atendimento/:id', Funcionario_atendimentoController.pegaUmFuncionario_atendimento)
router.post('/Funcionario_atendimento', Funcionario_atendimentoController.criaFuncionario_atendimento)
router.put('/Funcionario_atendimento/:id', Funcionario_atendimentoController.atualizaFuncionario_atendimento)
router.delete('/Funcionario_atendimento/:id', Funcionario_atendimentoController.apagaFuncionario_atendimento)

module.exports = router