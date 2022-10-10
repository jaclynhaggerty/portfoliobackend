'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class application extends Model {
  
    static associate(models) {
      application.belongsTo(models.user, {foreignKey: "userId"});
      application.belongsTo(models.animal, {foreignKey: "animalId"});
    }
  }
  application.init({
    userId: DataTypes.INTEGER,
    animalId: DataTypes.INTEGER,
    approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'application',
  });
  return application;
};