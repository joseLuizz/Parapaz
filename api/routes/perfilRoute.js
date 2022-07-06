const { Router } = require('express')
const PerfilController = require('../controllers/PerfilController')

const router = Router()

router.get('/perfil', PerfilController.pegaTodosPerfil)
router.get('/perfil/:id', PerfilController.pegaUmPerfil)
router.post('/perfil', PerfilController.criaPerfil)
router.put('/perfil/:id', PerfilController.atualizaPerfil)
router.delete('/perfil/:id', PerfilController.apagaPerfil)
/*router.get('/perfil/:estudanteId/matricula/:matriculaId',  PerfilController.pegaUmaMatricula)
router.post('/perfil/:estudanteId/matricula', PerfilController.criaMatricula)
router.put('/perfil/:estudanteId/matricula/:matriculaId',  PerfilController.atualizaMatricula)
router.delete('/perfil/:estudanteId/matricula/:matriculaId',  PerfilController.apagaMatricula)*/

module.exports = router