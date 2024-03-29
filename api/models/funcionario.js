'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Funcionario.belongsTo(models.Perfils, {
        foreignKey: 'perfil_id'
      })

      Funcionario.belongsToMany(models.Atendimentos, {
        through: 'Atendimento_funcionario'
      })

      Funcionario.belongsToMany(models.relatorios, {
        through: 'Funcionario_relatorio'
      })
    }
  }
  Funcionario.init({
    Nome: DataTypes.STRING,
    Cargo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Funcionario',
  });
  return Funcionario;
};