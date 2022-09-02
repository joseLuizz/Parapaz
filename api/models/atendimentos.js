'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atendimentos extends Model {
    static associate(models) {
      Atendimentos.belongsTo(models.vitimaMulhers, {
        foreignKey: 'registroMulher_id'
      });
      Atendimentos.belongsTo(models.vitimaCriancas, {
        foreignKey: 'registroCrianca_id'
      })
      Atendimentos.belongsToMany(models.Funcionario, {
        through: 'Atendimento_funcionario'
      })
    }
    }
  Atendimentos.init({
      nomeVitima: DataTypes.STRING,
      nomeFuncionario: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Atendimentos',
    });
  return Atendimentos;
}

