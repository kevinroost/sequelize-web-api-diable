'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UniqueItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UniqueItem.init({
    name: DataTypes.STRING,
    minDamage: DataTypes.NUMBER,
    maxDamage: DataTypes.NUMBER,
    charId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UniqueItem',
  });
  return UniqueItem;
};