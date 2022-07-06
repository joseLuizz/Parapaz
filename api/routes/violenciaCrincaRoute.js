const { Router } = require('express')
const ViolenciaCriancaController = require('../controllers/violenciaCriancaController')

const router = Router()

router.get('/violenciaCrianca', ViolenciaCriancaController.pegaTodosViolenciaCrianca)
router.get('/violenciaCrianca/:id', ViolenciaCriancaController.pegaUmViolenciaCrianca)
router.post('/violenciaCrianca', ViolenciaCriancaController.criaViolenciaCrianca)
router.put('/violenciaCrianca/:id', ViolenciaCriancaController.atualizaViolenciaCrianca)
router.delete('/violenciaCrianca/:id', ViolenciaCriancaController.apagaViolenciaCrianca)
/*router.get('/violenciaCrianca/:estudanteId/matricula/:matriculaId',  ViolenciaCriancaController.pegaUmaMatricula)
router.post('/violenciaCrianca/:estudanteId/matricula', ViolenciaCriancaController.criaMatricula)
router.put('/violenciaCrianca/:estudanteId/matricula/:matriculaId',  ViolenciaCriancaController.atualizaMatricula)
router.delete('/violenciaCrianca/:estudanteId/matricula/:matriculaId',  ViolenciaCriancaController.apagaMatricula)*/

module.exports = router