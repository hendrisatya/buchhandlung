const { category } = require("../models");

class CategoryController {
  static async getCategories(req, res) {
    try {
      let categories = await category.findAll({
        order: [["id", "asc"]],
      });
      res.json(categories);
    } catch (err) {
      res.json(err);
    }
  }

  static async add(req, res) {
    try {
      const { name } = req.body;
      let result = await category.create({
        name,
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CategoryController;
