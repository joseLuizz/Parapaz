const database = require('../models')

class SocioEconomicoCriancaController {
  static async pegaTodosSocioEconomicoCrianca(req, res){
    try {
      const todosSocioEconomicoCrianca = await database.socioEconomicoCrianca.findAll()
      return res.status(200).json(todosSocioEconomicoCrianca)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmSocioEconomicoCrianca(req, res) {
    const { id } = req.params
    try {
      const umSocioEconomicoCrianca = await database.socioEconomicoCrianca.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umSocioEconomicoCrianca)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaSocioEconomicoCrianca(req, res) {
    const novoSocioEconomicoCrianca = req.body
    try {
      const novoSocioEconomicoCriancaCriado = await database.socioEconomicoCrianca.create(novoSocioEconomicoCrianca)
      return res.status(200).json(novoSocioEconomicoCriancaCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaSocioEconomicoCrianca(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.socioEconomicoCrianca.update(novasInfos, { where: { id: Number(id) }})
      const SocioEconomicoCriancaAtualizado = await database.socioEconomicoCrianca.findOne( { where: { id: Number(id) }})
      return res.status(200).json(SocioEconomicoCriancaAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaSocioEconomicoCrianca(req, res) {
    const { id } = req.params
    try {
      await database.socioEconomicoCrianca.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = SocioEconomicoCriancaController