const database = require('../models')

class AtendimentoController {
  static async pegaTodosAtendimento(req, res){
    try {
      const todosAtendimento = await database.Atendimentos.findAll()
      return res.status(200).json(todosAtendimento)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmAtendimento(req, res) {
    const { id } = req.params
    try {
      const umAtendimento = await database.Atendimentos.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umAtendimento)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaAtendimento(req, res) {
    const novoAtendimento = req.body
    try {
      const novoAtendimentoCriado = await database.Atendimentos.create(novoAtendimento)
      return res.status(200).json(novoAtendimentoCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaAtendimento(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Atendimentos.update(novasInfos, { where: { id: Number(id) }})
      const AtendimentoAtualizado = await database.Atendimentos.findOne( { where: { id: Number(id) }})
      return res.status(200).json(AtendimentoAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaAtendimento(req, res) {
    const { id } = req.params
    try {
      await database.Atendimentos.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = AtendimentoController