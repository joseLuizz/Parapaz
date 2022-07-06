'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class relatorios extends Model {

    static associate(models) {
      
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