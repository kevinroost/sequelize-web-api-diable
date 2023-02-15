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
      UniqueItem.belongsTo(models.Character, {
        foreignKey: 'charId'
      })
    }
  }
  UniqueItem.init({
    name: DataTypes.STRING,
    minDamage: {
      type: DataTypes.NUMBER,
    },
    maxDamage: {
      type: DataTypes.NUMBER,
      min: this.minDamage+1
    },
    charId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UniqueItem',
  });
  return UniqueItem;
};