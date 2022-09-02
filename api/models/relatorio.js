'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class relatorios extends Model {

    static associate(models) {
      relatorios.belongsToMany(models.Funcionario, {
        through: 'Funcionario_relatorio'
      })
      
    }
  }
  relatorios.init({
    Atendimentos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'relatorios',
  });
  return relatorios;
};