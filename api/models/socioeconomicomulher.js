'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class socioEconomicoMulhers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      socioEconomicoMulhers.belongsTo(models.vitimaMulhers, {
        foreignKey: 'registro_id'
      })
    }
  }
  socioEconomicoMulhers.init({
    grupo_familiar: DataTypes.STRING,
    condicao_moradia: DataTypes.STRING,
    renda_familiar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'socioEconomicoMulhers',
  });
  return socioEconomicoMulhers;
};