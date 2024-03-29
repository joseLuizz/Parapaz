const database = require('../models')

class ViolenciaMulherController {
  static async pegaTodosViolenciaMulher(req, res){
    try {
      const todosViolenciaMulher = await database.violenciaMulhers.findAll()
      return res.status(200).json(todosViolenciaMulher)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmViolenciaMulher(req, res) {
    const { id } = req.params
    try {
      const umViolenciaMulher = await database.violenciaMulhers.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umViolenciaMulher)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaViolenciaMulher(req, res) {
    const novoViolenciaMulher = req.body
    try {
      const novoViolenciaMulherCriado = await database.violenciaMulhers.create(novoViolenciaMulher)
      return res.status(200).json(novoViolenciaMulherCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaViolenciaMulher(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.violenciaMulhers.update(novasInfos, { where: { id: Number(id) }})
      const ViolenciaMulherAtualizado = await database.violenciaMulhers.findOne( { where: { id: Number(id) }})
      return res.status(200).json(ViolenciaMulherAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaViolenciaMulher(req, res) {
    const { id } = req.params
    try {
      await database.violenciaMulhers.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ViolenciaMulherController