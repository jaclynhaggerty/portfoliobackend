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
    description: DataTypes.STRING,
    adopted: DataTypes.BOOLEAN,
    mainImage: DataTypes.STRING,
    extraImages: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'animal',
  });
  return animal;
};