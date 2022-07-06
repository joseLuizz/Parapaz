'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfils extends Model {

    static associate(models){
      Perfils.hasOne(models.Funcionario, {
        foreignKey: 'perfil_id'
      });
    
    }
  };
  Perfils.init({
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Perfils',
  });
  return Perfils;
};