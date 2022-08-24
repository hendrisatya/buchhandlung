'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  publisher.init({
    name: DataTypes.STRING,
    founded: DataTypes.DATE,
    countryOfOrigin: DataTypes.STRING,
    headquarter: DataTypes.STRING,
    homePage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'publisher',
  });
  return publisher;
};