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
}

module.exports = BookController;
