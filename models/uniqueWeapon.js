'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UniqueWeapon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UniqueWeapon.belongsTo(models.Character, {
        foreignKey: 'charId'
      })
    }
  }
  UniqueWeapon.init({
    name: DataTypes.STRING,
    weaponType: DataTypes.STRING,
    minDamage: {
      type: DataTypes.INTEGER,
    },
    maxDamage: {
      type: DataTypes.INTEGER,
    },
    charId: DataTypes.INTEGER,
    // hooks: {
    //   beforeCreate: (UniqueWeapon) => {
    //     if (UniqueWeapon.maxDamage <= UniqueWeapon.minDamage) {
    //       throw new Error("Maximum Damage needs to be greater than Minimum Damage!")
    //     }
    //   }
    // }
  }, {
    sequelize,
    modelName: 'UniqueWeapon',
  });

  // UniqueWeapon.beforeCreate(UniqueWeapon)

  return UniqueWeapon;
};