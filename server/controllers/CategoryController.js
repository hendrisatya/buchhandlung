const { category, book } = require("../models");

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

  static async getCategoryInformation(req, res) {
    try {
      const id = +req.params.id;
      let result = await category.findByPk(id);
      res.json(result);
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

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;
      let result = await category.update(
        {
          name,
        },
        { where: { id } }
      );
      result == 1
        ? res.json({ message: `Publisher with id: ${id} has been updated!` })
        : res.json({ message: `Publisher with id: ${id} is not found!` });
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;
      let resultCategory = await category.destroy({ where: { id } });
      let resultBook = await book.destroy({
        where: { categoryId: id },
      });
      resultCategory == 1
        ? res.json({ message: `Publisher with id: ${id} has been deleted!` })
        : res.json({ message: `Publisher with id: ${id} is not found!` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CategoryController;
