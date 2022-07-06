const { Router } = require('express')
const SocioEconomicoMulherController = require('../controllers/SocioEconomicoMulherController')

const router = Router()

router.get('/socioEconomicoMulher', SocioEconomicoMulherController.pegaTodosSocioEconomicoMulher)
router.get('/socioEconomicoMulher/:id', SocioEconomicoMulherController.pegaUmSocioEconomicoMulher)
router.post('/socioEconomicoMulher', SocioEconomicoMulherController.criaSocioEconomicoMulher)
router.put('/socioEconomicoMulher/:id', SocioEconomicoMulherController.atualizaSocioEconomicoMulher)
router.delete('/socioEconomicoMulher/:id', SocioEconomicoMulherController.apagaSocioEconomicoMulher)
/*router.get('/socioEconomicoMulher/:estudanteId/matricula/:matriculaId',  SocioEconomicoMulherController.pegaUmaMatricula)
router.post('/socioEconomicoMulher/:estudanteId/matricula', SocioEconomicoMulherController.criaMatricula)
router.put('/socioEconomicoMulher/:estudanteId/matricula/:matriculaId',  SocioEconomicoMulherController.atualizaMatricula)
router.delete('/socioEconomicoMulher/:estudanteId/matricula/:matriculaId',  SocioEconomicoMulherController.apagaMatricula)*/

module.exports = router