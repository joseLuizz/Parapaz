const database = require('../models')

class UsuarioCriancaController {
  static async pegaTodosUsuarioCrianca(req, res){
    try {
      const todosUsuarioCrianca = await database.usuarioCrianca.findAll()
      return res.status(200).json(todosUsuarioCrianca)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmUsuarioCrianca(req, res) {
    const { id } = req.params
    try {
      const umUsuarioCrianca = await database.usuarioCrianca.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umUsuarioCrianca)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaUsuarioCrianca(req, res) {
    const novoUsuarioCrianca = req.body
    try {
      const novoUsuarioCriancaCriado = await database.usuarioCrianca.create(novoUsuarioCrianca)
      return res.status(200).json(novoUsuarioCriancaCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaUsuarioCrianca(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.usuarioCrianca.update(novasInfos, { where: { id: Number(id) }})
      const UsuarioCriancaAtualizado = await database.usuarioCrianca.findOne( { where: { id: Number(id) }})
      return res.status(200).json(UsuarioCriancaAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaUsuarioCrianca(req, res) {
    const { id } = req.params
    try {
      await database.usuarioCrianca.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UsuarioCriancaController