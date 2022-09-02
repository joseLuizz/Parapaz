const { Router } = require('express')
const ViolenciaMulherController = require('../controllers/violenciaMulherController')

const router = Router()

router.get('/violenciaMulher', ViolenciaMulherController.pegaTodosViolenciaMulher)
router.get('/violenciaMulher/:id', ViolenciaMulherController.pegaUmViolenciaMulher)
router.post('/violenciaMulher', ViolenciaMulherController.criaViolenciaMulher)
router.put('/violenciaMulher/:id', ViolenciaMulherController.atualizaViolenciaMulher)
router.delete('/violenciaMulher/:id', ViolenciaMulherController.apagaViolenciaMulher)


module.exports = router