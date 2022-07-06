const { Router } = require('express')
const UsuariaMulherController = require('../controllers/UsuariaMulherController')

const router = Router()

router.get('/usuariaMulher', UsuariaMulherController.pegaTodosUsuariaMulher)
router.get('/usuariaMulher/:id', UsuariaMulherController.pegaUmUsuariaMulher)
router.post('/usuariaMulher', UsuariaMulherController.criaUsuariaMulher)
router.put('/usuariaMulher/:id', UsuariaMulherController.atualizaUsuariaMulher)
router.delete('/usuariaMulher/:id', UsuariaMulherController.apagaUsuariaMulher)
/*router.get('/usuariaMulher/:estudanteId/matricula/:matriculaId',  UsuariaMulherController.pegaUmaMatricula)
router.post('/usuariaMulher/:estudanteId/matricula', UsuariaMulherController.criaMatricula)
router.put('/usuariaMulher/:estudanteId/matricula/:matriculaId',  UsuariaMulherController.atualizaMatricula)
router.delete('/usuariaMulher/:estudanteId/matricula/:matriculaId',  UsuariaMulherController.apagaMatricula)*/

module.exports = router