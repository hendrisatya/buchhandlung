const { author, book } = require("../models");

class AuthorController {
  static async getAuthors(req, res) {
    try {
      let authors = await author.findAll({
        order: [["id", "asc"]],
      });
      res.json(authors);
    } catch (err) {
      res.json(err);
    }
  }

  static async getAuthorInformation(req, res) {
    try {
      const id = +req.params.id;
      let result = await author.findByPk(id);
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async add(req, res) {
    try {
      const { name, dateOfBirth, city, image } = req.body;
      let result = await author.create({
        name,
        dateOfBirth,
        city,
        image,
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, dateOfBirth, city, image } = req.body;
      let result = await author.update(
        {
          name,
          dateOfBirth,
          city,
          image,
        },
        { where: { id } }
      );
      result == 1
        ? res.json({ message: `Author with id: ${id} has been updated!` })
        : res.json({ message: `Author with id: ${id} is not found!` });
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let resultAuthor = await author.destroy({ where: { id } });
      let resultBook = await book.destroy({ where: { authorId: id } });
      result == 1
        ? res.json({ message: `Author with id: ${id} has been deleted!` })
        : res.json({ message: `Author with id: ${id} is not found!` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = AuthorController;
