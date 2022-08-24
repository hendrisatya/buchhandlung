const { publisher } = require("../models");

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

  static async add(req, res) {
    try {
      const { name, founded, countryOfOrigin, headquarter, homePage } =
        req.body;
      let result = await publisher.create({
        name,
        founded,
        countryOfOrigin,
        headquarter,
        homePage,
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, founded, countryOfOrigin, headquarter, homePage } =
        req.body;
      let result = await publisher.update(
        {
          name,
          founded,
          countryOfOrigin,
          headquarter,
          homePage,
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
      let result = await publisher.destroy({
        where: { id },
      });
      result == 1
        ? res.json({ message: `Publisher with id: ${id} has been deleted!` })
        : res.json({ message: `Publisher with id: ${id} is not found!` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = PublisherController;
