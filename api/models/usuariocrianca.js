'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarioCrianca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuarioCrianca.belongsTo(models.vitimaCriancas, {
        foreignKey: 'registro_id'
      })
    }
  }
  usuarioCrianca.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    mae: DataTypes.STRING,
    pai: DataTypes.STRING,
    responsavel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarioCrianca',
  });
  return usuarioCrianca;
};