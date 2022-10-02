'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {

    static associate(models) {
      user.hasMany(models.application, {foreignKey: "userId"});
    }
  }
  user.init({
    name: { type: DataTypes.STRING, unique: true, allowNull: false},
    email: { type: DataTypes.STRING, allowNull: false},
    phone: { type: DataTypes.INTEGER },
    password: { type: DataTypes.STRING, allowNull: false},
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  },
  {
    sequelize,
    modelName: 'user',
  });
  return user;
};