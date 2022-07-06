const { Router } = require('express')
const RelatorioController = require('../controllers/RelatorioController')

const router = Router()

router.get('/relatorio', RelatorioController.pegaTodosRelatorio)
router.get('/relatorio/:id', RelatorioController.pegaUmRelatorio)
router.post('/relatorio', RelatorioController.criaRelatorio)
router.put('/relatorio/:id', RelatorioController.atualizaRelatorio)
router.delete('/relatorio/:id', RelatorioController.apagaRelatorio)

module.exports = router