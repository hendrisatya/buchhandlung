const { book } = require("../models");

class BookController {
  static async getBooks(req, res) {
    try {
      let books = await book.findAll();
      res.json(books);
    } catch (err) {
      res.json(err);
    }
  }

  static async add(req, res) {
    try {
      const {
        title,
        synopsis,
        price,
        publicationYear,
        categoryId,
        authorId,
        publisherId,
      } = req.body;
      let result = await book.create({
        title,
        synopsis,
        price,
        publicationYear,
        categoryId,
        authorId,
        publisherId,
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const {
        title,
        synopsis,
        price,
        publicationYear,
        categoryId,
        authorId,
        publisherId,
      } = req.body;
      let result = await book.update(
        {
          title,
          synopsis,
          price,
          publicationYear,
          categoryId,
          authorId,
          publisherId,
        },
        { where: { id } }
      );
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await book.destroy({ where: { id } });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = BookController;
