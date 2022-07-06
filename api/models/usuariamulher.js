'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuariaMulhers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuariaMulhers.belongsTo(models.vitimaMulhers, {
        foreignKey: 'registro_id'
      })
    }
  }
  usuariaMulhers.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.INTEGER,
    endereco: DataTypes.STRING,
    estado_civil: DataTypes.STRING,
    relacao_sexual_com: DataTypes.STRING,
    transtorno_deficiencia: DataTypes.STRING,
    situacao_ocupacional: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuariaMulhers',
  });
  return usuariaMulhers;
};