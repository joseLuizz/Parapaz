const { Router } = require('express')
const SocioEconomicoCriancaController = require('../controllers/SocioEconomicoCriancaController')

const router = Router()

router.get('/socioEconomicoCrianca', SocioEconomicoCriancaController.pegaTodosSocioEconomicoCrianca)
router.get('/socioEconomicoCrianca/:id', SocioEconomicoCriancaController.pegaUmSocioEconomicoCrianca)
router.post('/socioEconomicoCrianca', SocioEconomicoCriancaController.criaSocioEconomicoCrianca)
router.put('/socioEconomicoCrianca/:id', SocioEconomicoCriancaController.atualizaSocioEconomicoCrianca)
router.delete('/socioEconomicoCrianca/:id', SocioEconomicoCriancaController.apagaSocioEconomicoCrianca)
/*router.get('/socioEconomicoCrianca/:estudanteId/matricula/:matriculaId',  SocioEconomicoCriancaController.pegaUmaMatricula)
router.post('/socioEconomicoCrianca/:estudanteId/matricula', SocioEconomicoCriancaController.criaMatricula)
router.put('/socioEconomicoCrianca/:estudanteId/matricula/:matriculaId',  SocioEconomicoCriancaController.atualizaMatricula)
router.delete('/socioEconomicoCrianca/:estudanteId/matricula/:matriculaId',  SocioEconomicoCriancaController.apagaMatricula)*/

module.exports = router