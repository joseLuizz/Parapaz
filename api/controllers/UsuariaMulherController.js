const database = require('../models')

class UsuariaMulherController {
  static async pegaTodosUsuariaMulher(req, res){
    try {
      const todosUsuariaMulher = await database.usuariaMulhers.findAll()
      return res.status(200).json(todosUsuariaMulher)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmUsuariaMulher(req, res) {
    const { id } = req.params
    try {
      const umUsuariaMulher = await database.usuariaMulhers.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umUsuariaMulher)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaUsuariaMulher(req, res) {
    const novoUsuariaMulher = req.body
    try {
      const novoUsuariaMulherCriado = await database.usuariaMulhers.create(novoUsuariaMulher)
      return res.status(200).json(novoUsuariaMulherCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaUsuariaMulher(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.usuariaMulhers.update(novasInfos, { where: { id: Number(id) }})
      const UsuariaMulherAtualizado = await database.usuariaMulhers.findOne( { where: { id: Number(id) }})
      return res.status(200).json(UsuariaMulherAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaUsuariaMulher(req, res) {
    const { id } = req.params
    try {
      await database.usuariaMulhers.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UsuariaMulherController