'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class funcionario_atendimento extends Model {

    static associate(models) {
   
      
    }
  }
  funcionario_atendimento.init({
 
  }, {
    sequelize,
    modelName: 'funcionario_atendimento',
  });
  return funcionario_atendimento;
};