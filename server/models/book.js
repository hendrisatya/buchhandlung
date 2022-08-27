"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book.belongsTo(models.author);
      book.belongsTo(models.category);
      book.belongsTo(models.publisher);
    }
  }
  book.init(
    {
      title: DataTypes.STRING,
      synopsis: DataTypes.STRING,
      price: DataTypes.INTEGER,
      publicationYear: DataTypes.DATE,
      image: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
      publisherId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "book",
    }
  );
  return book;
};
