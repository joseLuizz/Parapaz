const database = require('../models')

class RelatorioController {
  static async pegaTodosRelatorio(req, res){
    try {
      const todosRelatorio = await database.relatorios.findAll()
      return res.status(200).json(todosRelatorio)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmRelatorio(req, res) {
    const { id } = req.params
    try {s
      const umRelatorio = await database.relatorios.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umRelatorio)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaRelatorio(req, res) {
    const novoRelatorio = req.body
    try {
      const novoRelatorioCriado = await database.relatorios.create(novoRelatorio)
      return res.status(200).json(novoRelatorioCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaRelatorio(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.relatorios.update(novasInfos, { where: { id: Number(id) }})
      const RelatorioAtualizado = await database.relatorios.findOne( { where: { id: Number(id) }})
      return res.status(200).json(RelatorioAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaRelatorio(req, res) {
    const { id } = req.params
    try {
      await database.relatorios.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = RelatorioController