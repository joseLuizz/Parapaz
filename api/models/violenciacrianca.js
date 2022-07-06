'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class violenciaCriancas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      violenciaCriancas.belongsTo(models.vitimaCriancas, {
        foreignKey: 'registro_id'
      })
    }
  }
  violenciaCriancas.init({
    quem_notificou: DataTypes.STRING,
    orgao_encaminhou: DataTypes.STRING,
    abuso_sexual: DataTypes.STRING,
    tipo_lesao: DataTypes.STRING,
    marcas_pelo_corpo: DataTypes.STRING,
    vitima_ficou_internada: DataTypes.STRING,
    agravantes_do_caso: DataTypes.STRING,
    transtorno_deficiencia: DataTypes.STRING,
    local_acontecimento: DataTypes.STRING,
    info_agressor: DataTypes.STRING,
    fatores_de_risco: DataTypes.STRING,
    relacao_com_vitima: DataTypes.STRING,
    evolucao_do_caso: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'violenciaCriancas',
  });
  return violenciaCriancas;
};