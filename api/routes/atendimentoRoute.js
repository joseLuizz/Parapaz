const { Router } = require('express')
const AtendimentoController = require('../controllers/AtendimentoController')

const router = Router()

router.get('/atendimento', AtendimentoController.pegaTodosAtendimento)
router.get('/atendimento/:id', AtendimentoController.pegaUmAtendimento)
router.post('/atendimento', AtendimentoController.criaAtendimento)
router.put('/atendimento/:id', AtendimentoController.atualizaAtendimento)
router.delete('/atendimento/:id', AtendimentoController.apagaAtendimento)


module.exports = router