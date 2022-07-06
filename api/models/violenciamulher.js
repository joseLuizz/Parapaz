'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class violenciaMulhers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      violenciaMulhers.belongsTo(models.vitimaMulhers, {
        foreignKey: 'registro_id'
      })
    }
  }
  violenciaMulhers.init({
    quem_notificou: DataTypes.STRING,
    tipo_violencia: DataTypes.STRING,
    ocorreu_penetracao: DataTypes.STRING,
    meio_de_agressao: DataTypes.STRING,
    tipo_lesao: DataTypes.STRING,
    area_corpo_atingiada: DataTypes.STRING,
    local_ocorrencia: DataTypes.STRING,
    ocorreu_outras_vezes: DataTypes.STRING,
    info_sobre_agressor: DataTypes.STRING,
    situacao_ocupacional: DataTypes.STRING,
    numero_envolvidos: DataTypes.STRING,
    suspeita_drogas_alcool: DataTypes.STRING,
    vinculo_parentesco: DataTypes.STRING,
    acompanhamento_evolucao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'violenciaMulhers',
  });
  return violenciaMulhers;
};