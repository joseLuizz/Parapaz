'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atendimentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Atendimentos.belongsTo(models.vitimaMulhers, {
        foreignKey: 'registroMulher_id'
      })
      Atendimentos.belongsToMany(models.Funcionario, {
        through: 'funcionario_atendimento',
        as: 'Funcionario',
        foreignKey: 'atendimento_id'
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

