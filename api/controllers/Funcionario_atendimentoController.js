const database = require('../models')

class Funcionario_atentimentoController {
  static async pegaTodosFuncionario_atendimento(req, res){
    try {
      const todosFuncionario_atendimento = await database.funcionario_atendimento.findAll()
      return res.status(200).json(todosFuncionario_atendimento)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmFuncionario_atendimento(req, res) {
    const { id } = req.params
    try {s
      const umFuncionario_atendimento = await database.funcionario_atendimento.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umFuncionario_atendimento)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaFuncionario_atendimento(req, res) {
    const novoFuncionario_atendimento = req.body
    try {
      const novoFuncionario_atentimentoCriado = await database.funcionario_atendimento.create(novoFuncionario_atendimento)
      return res.status(200).json(novoFuncionario_atentimentoCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaFuncionario_atendimento(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.funcionario_atendimento.update(novasInfos, { where: { id: Number(id) }})
      const Funcionario_atendimentoAtualizado = await database.funcionario_atendimento.findOne( { where: { id: Number(id) }})
      return res.status(200).json(Funcionario_atendimentoAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaFuncionario_atendimento(req, res) {
    const { id } = req.params
    try {
      await database.funcionario_atendimento.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = Funcionario_atentimentoController