'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class socioEconomicoCrianca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      socioEconomicoCrianca.belongsTo(models.vitimaCriancas, {
        foreignKey: 'registro_id'
      })
    }
  }
  socioEconomicoCrianca.init({
    grupo_familiar: DataTypes.STRING,
    condicao_moradia: DataTypes.STRING,
    renda_familiar: DataTypes.STRING,
    tipo_violencia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'socioEconomicoCrianca',
  });
  return socioEconomicoCrianca;
};