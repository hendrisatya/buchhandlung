const { publisher, book } = require("../models");

class PublisherController {
  static async getPublishers(req, res) {
    try {
      let publishers = await publisher.findAll({
        order: [["id", "asc"]],
      });
      res.json(publishers);
    } catch (err) {
      res.json(err);
    }
  }

  static async getPublisherInformation(req, res) {
    try {
      const id = +req.params.id;
      let result = await publisher.findByPk(id);
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async add(req, res) {
    try {
      const { name, founded, countryOfOrigin, headquarter, homePage, image } =
        req.body;
      let result = await publisher.create({
        name,
        founded,
        countryOfOrigin,
        headquarter,
        homePage,
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
      const { name, founded, countryOfOrigin, headquarter, homePage, image } =
        req.body;
      let result = await publisher.update(
        {
          name,
          founded,
          countryOfOrigin,
          headquarter,
          homePage,
          image,
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
      let resultPublisher = await publisher.destroy({
        where: { id },
      });
      let resultBook = await book.destroy({ where: { publisherId: id } });
      resultPublisher == 1
        ? res.json({ message: `Publisher with id: ${id} has been deleted!` })
        : res.json({ message: `Publisher with id: ${id} is not found!` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = PublisherController;
