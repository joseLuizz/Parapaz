const { Router } = require('express')
const VitimaMulherController = require('../controllers/VitimaMulherController')

const router = Router()

router.get('/vitimaMulher', VitimaMulherController.pegaTodosVitimaMulher)
router.get('/vitimaMulher/:id', VitimaMulherController.pegaUmVitimaMulher)
router.post('/vitimaMulher', VitimaMulherController.criaVitimaMulher)
router.put('/vitimaMulher/:id', VitimaMulherController.atualizaVitimaMulher)
router.delete('/vitimaMulher/:id', VitimaMulherController.apagaVitimaMulher)
/*router.get('/VitimaMulher/:estudanteId/matricula/:matriculaId',  VitimaMulherController.pegaUmaMatricula)
router.post('/VitimaMulher/:estudanteId/matricula', VitimaMulherController.criaMatricula)
router.put('/VitimaMulher/:estudanteId/matricula/:matriculaId',  VitimaMulherController.atualizaMatricula)
router.delete('/VitimaMulher/:estudanteId/matricula/:matriculaId',  VitimaMulherController.apagaMatricula)*/

module.exports = router