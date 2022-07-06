const { Router } = require('express')
const VitimaCriancaController = require('../controllers/VitimaCriancaController')

const router = Router()

router.get('/vitimaCrianca', VitimaCriancaController.pegaTodosVitimaCrianca)
router.get('/vitimaCrianca/:id', VitimaCriancaController.pegaUmVitimaCrianca)
router.post('/vitimaCrianca', VitimaCriancaController.criaVitimaCrianca)
router.put('/vitimaCrianca/:id', VitimaCriancaController.atualizaVitimaCrianca)
router.delete('/vitimaCrianca/:id', VitimaCriancaController.apagaVitimaCrianca)
/*router.get('/VitimaCrianca/:estudanteId/matricula/:matriculaId',  VitimaCriancaController.pegaUmaMatricula)
router.post('/VitimaCrianca/:estudanteId/matricula', VitimaCriancaController.criaMatricula)
router.put('/VitimaCrianca/:estudanteId/matricula/:matriculaId',  VitimaCriancaController.atualizaMatricula)
router.delete('/VitimaCrianca/:estudanteId/matricula/:matriculaId',  VitimaCriancaController.apagaMatricula)*/

module.exports = router
