'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vitimaCriancas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vitimaCriancas.hasOne(models.usuarioCrianca, {
        foreignKey: 'registro_id'
      });
      vitimaCriancas.hasOne(models.violenciaCriancas, {
        foreignKey: 'registro_id'
      });
      vitimaCriancas.hasOne(models.socioEconomicoCrianca, {
        foreignKey: 'registro_id'
      });
      vitimaCriancas.hasOne(models.Atendimentos, {
        foreignKey: 'registro_id'
      })
    }
  }
  vitimaCriancas.init({
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'vitimaCriancas',
  });
  return vitimaCriancas;
};