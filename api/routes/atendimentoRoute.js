const { Router } = require('express')
const AtendimentoController = require('../controllers/AtendimentoController')

const router = Router()

router.get('/atendimento', AtendimentoController.pegaTodosAtendimento)
router.get('/atendimento/:id', AtendimentoController.pegaUmAtendimento)
router.post('/atendimento', AtendimentoController.criaAtendimento)
router.put('/atendimento/:id', AtendimentoController.atualizaAtendimento)
router.delete('/atendimento/:id', AtendimentoController.apagaAtendimento)
/*router.get('/atendimento/:estudanteId/matricula/:matriculaId',  AtendimentoController.pegaUmaMatricula)
router.post('/atendimento/:estudanteId/matricula', AtendimentoController.criaMatricula)
router.put('/atendimento/:estudanteId/matricula/:matriculaId',  AtendimentoController.atualizaMatricula)
router.delete('/atendimento/:estudanteId/matricula/:matriculaId',  AtendimentoController.apagaMatricula)*/

module.exports = router