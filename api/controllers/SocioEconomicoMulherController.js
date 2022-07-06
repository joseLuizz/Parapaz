const database = require('../models')

class SocioEconomicoMulherController {
  static async pegaTodosSocioEconomicoMulher(req, res){
    try {
      const todosSocioEconomicoMulher = await database.socioEconomicoMulhers.findAll()
      return res.status(200).json(todosSocioEconomicoMulher)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmSocioEconomicoMulher(req, res) {
    const { id } = req.params
    try {
      const umSocioEconomicoMulher = await database.socioEconomicoMulhers.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umSocioEconomicoMulher)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaSocioEconomicoMulher(req, res) {
    const novoSocioEconomicoMulher = req.body
    try {
      const novoSocioEconomicoMulherCriado = await database.socioEconomicoMulhers.create(novoSocioEconomicoMulher)
      return res.status(200).json(novoSocioEconomicoMulherCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaSocioEconomicoMulher(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.socioEconomicoMulhers.update(novasInfos, { where: { id: Number(id) }})
      const SocioEconomicoMulherAtualizado = await database.socioEconomicoMulhers.findOne( { where: { id: Number(id) }})
      return res.status(200).json(SocioEconomicoMulherAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaSocioEconomicoMulher(req, res) {
    const { id } = req.params
    try {
      await database.socioEconomicoMulhers.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = SocioEconomicoMulherController