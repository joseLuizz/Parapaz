const database = require('../models')

class VitimaMulherController {
  static async pegaTodosVitimaMulher(req, res){
    try {
      const todosVitimaMulher = await database.vitimaMulhers.findAll()
      return res.status(200).json(todosVitimaMulher)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmVitimaMulher(req, res) {
    const { id } = req.params
    try {
      const umVitimaMulher = await database.vitimaMulhers.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umVitimaMulher)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaVitimaMulher(req, res) {
    const novoVitimaMulher = req.body
    try {
      const novoVitimaMulherCriado = await database.vitimaMulhers.create(novoVitimaMulher)
      return res.status(200).json(novoVitimaMulherCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaVitimaMulher(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.vitimaMulhers.update(novasInfos, { where: { id: Number(id) }})
      const VitimaMulherAtualizado = await database.vitimaMulhers.findOne( { where: { id: Number(id) }})
      return res.status(200).json(VitimaMulherAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaVitimaMulher(req, res) {
    const { id } = req.params
    try {
      await database.vitimaMulhers.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = VitimaMulherController