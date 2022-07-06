const { Router } = require('express')
const UsuarioCriancaController = require('../controllers/UsusarioCriancaController')

const router = Router()

router.get('/usuarioCrianca', UsuarioCriancaController.pegaTodosUsuarioCrianca)
router.get('/usuarioCrianca/:id', UsuarioCriancaController.pegaUmUsuarioCrianca)
router.post('/usuarioCrianca', UsuarioCriancaController.criaUsuarioCrianca)
router.put('/usuarioCrianca/:id', UsuarioCriancaController.atualizaUsuarioCrianca)
router.delete('/usuarioCrianca/:id', UsuarioCriancaController.apagaUsuarioCrianca)
/*router.get('/usuarioCrianca/:estudanteId/matricula/:matriculaId',  UsuarioCriancaController.pegaUmaMatricula)
router.post('/usuarioCrianca/:estudanteId/matricula', UsuarioCriancaController.criaMatricula)
router.put('/usuarioCrianca/:estudanteId/matricula/:matriculaId',  UsuarioCriancaController.atualizaMatricula)
router.delete('/usuarioCrianca/:estudanteId/matricula/:matriculaId',  UsuarioCriancaController.apagaMatricula)*/

module.exports = router