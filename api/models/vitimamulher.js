'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vitimaMulhers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vitimaMulhers.hasOne(models.violenciaMulhers, {
        foreignKey: 'registro_id'
      });
      vitimaMulhers.hasOne(models.usuariaMulhers, {
        foreignKey: 'registro_id'
      });
      vitimaMulhers.hasOne(models.socioEconomicoMulhers, {
        foreignKey: 'registro_id'
      });
      vitimaMulhers.hasOne(models.Atendimentos, {
        foreignKey: 'registroMulher_id'
      })
    }
  }
  vitimaMulhers.init({
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'vitimaMulhers',
  });
  return vitimaMulhers;
};