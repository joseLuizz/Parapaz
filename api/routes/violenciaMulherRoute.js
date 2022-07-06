const { Router } = require('express')
const ViolenciaMulherController = require('../controllers/violenciaMulherController')

const router = Router()

router.get('/violenciaMulher', ViolenciaMulherController.pegaTodosViolenciaMulher)
router.get('/violenciaMulher/:id', ViolenciaMulherController.pegaUmViolenciaMulher)
router.post('/violenciaMulher', ViolenciaMulherController.criaViolenciaMulher)
router.put('/violenciaMulher/:id', ViolenciaMulherController.atualizaViolenciaMulher)
router.delete('/violenciaMulher/:id', ViolenciaMulherController.apagaViolenciaMulher)
/*router.get('/violenciaMulher/:estudanteId/matricula/:matriculaId',  ViolenciaMulherController.pegaUmaMatricula)
router.post('/violenciaMulher/:estudanteId/matricula', ViolenciaMulherController.criaMatricula)
router.put('/violenciaMulher/:estudanteId/matricula/:matriculaId',  ViolenciaMulherController.atualizaMatricula)
router.delete('/violenciaMulher/:estudanteId/matricula/:matriculaId',  ViolenciaMulherController.apagaMatricula)*/

module.exports = router