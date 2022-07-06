const database = require('../models')

class PerfilController {
  static async pegaTodosPerfil(req, res){
    try {
      const todosPerfil = await database.Perfils.findAll()
      return res.status(200).json(todosPerfil)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmPerfil(req, res) {
    const { id } = req.params
    try {
      const umPerfil = await database.Perfils.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umPerfil)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPerfil(req, res) {
    const novoPerfil = req.body
    try {
      const novoPerfilCriado = await database.Perfils.create(novoPerfil)
      return res.status(200).json(novoPerfilCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPerfil(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Perfils.update(novasInfos, { where: { id: Number(id) }})
      const perfilAtualizado = await database.Perfils.findOne( { where: { id: Number(id) }})
      return res.status(200).json(perfilAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaPerfil(req, res) {
    const { id } = req.params
    try {
      await database.Perfils.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


  /*static async pegaUmaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      const umaMatricula = await database.Matriculas.findOne( { 
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json(umaMatricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaMatricula(req, res) {
    const { estudanteId } = req.params
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
    try {
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
      return res.status(200).json(novaMatriculaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    const novasInfos = req.body
    try {
      await database.Matriculas.update(novasInfos, { 
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId) 
        }})
      const MatriculaAtualizada = await database.Matriculas.findOne( { where: { id: Number(matriculaId) }})
      return res.status(200).json(MatriculaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.destroy({ where: { id: Number(matriculaId) }})
      return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }*/
}

module.exports = PerfilController