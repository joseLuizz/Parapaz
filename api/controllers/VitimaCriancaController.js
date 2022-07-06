const database = require('../models')

class VitimaCriancaController {
  static async pegaTodosVitimaCrianca(req, res){
    try {
      const todosVitimaCrianca = await database.vitimaCriancas.findAll()
      return res.status(200).json(todosVitimaCrianca)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmVitimaCrianca(req, res) {
    const { id } = req.params
    try {
      const umVitimaCrianca = await database.vitimaCriancas.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umVitimaCrianca)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaVitimaCrianca(req, res) {
    const novoVitimaCrianca = req.body
    try {
      const novoVitimaCriancaCriado = await database.vitimaCriancas.create(novoVitimaCrianca)
      return res.status(200).json(novoVitimaCriancaCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaVitimaCrianca(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.vitimaCriancas.update(novasInfos, { where: { id: Number(id) }})
      const VitimaCriancaAtualizado = await database.vitimaCriancas.findOne( { where: { id: Number(id) }})
      return res.status(200).json(VitimaCriancaAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaVitimaCrianca(req, res) {
    const { id } = req.params
    try {
      await database.vitimaCriancas.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = VitimaCriancaController