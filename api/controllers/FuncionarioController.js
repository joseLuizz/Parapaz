const database = require('../models')

class FuncionarioController {
  static async pegaTodosFuncionario(req, res){
    try {
      const todosFuncionario = await database.Funcionario.findAll()
      return res.status(200).json(todosFuncionario)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmFuncionario(req, res) {
    const { id } = req.params
    try {
      const umFuncionario = await database.Funcionario.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umFuncionario)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaFuncionario(req, res) {
    const novoFuncionario = req.body
    try {
      const novoFuncionarioCriado = await database.Funcionario.create(novoFuncionario)
      return res.status(200).json(novoFuncionarioCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaFuncionario(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Funcionario.update(novasInfos, { where: { id: Number(id) }})
      const FuncionarioAtualizado = await database.Funcionario.findOne( { where: { id: Number(id) }})
      return res.status(200).json(FuncionarioAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaFuncionario(req, res) {
    const { id } = req.params
    try {
      await database.Funcionario.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = FuncionarioController