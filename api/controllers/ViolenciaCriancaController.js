const database = require('../models')

class ViolenciaCriancaController {
  static async pegaTodosViolenciaCrianca(req, res){
    try {
      const todosViolenciaCrianca = await database.violenciaCriancas.findAll()
      return res.status(200).json(todosViolenciaCrianca)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmViolenciaCrianca(req, res) {
    const { id } = req.params
    try {
      const umViolenciaCrianca = await database.violenciaCriancas.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umViolenciaCrianca)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaViolenciaCrianca(req, res) {
    const novoViolenciaCrianca = req.body
    try {
      const novoViolenciaCriancaCriado = await database.violenciaCriancas.create(novoViolenciaCrianca)
      return res.status(200).json(novoViolenciaCriancaCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaViolenciaCrianca(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.violenciaCriancas.update(novasInfos, { where: { id: Number(id) }})
      const ViolenciaCriancaAtualizado = await database.violenciaCriancas.findOne( { where: { id: Number(id) }})
      return res.status(200).json(ViolenciaCriancaAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaViolenciaCrianca(req, res) {
    const { id } = req.params
    try {
      await database.violenciaCriancas.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ViolenciaCriancaController