'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animal extends Model {
  
    static associate(models) {
      animal.hasMany(models.application, {foreignKey: "animalId"});
    }
  }
  animal.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    species: DataTypes.STRING,
    adopted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'animal',
  });
  return animal;
};