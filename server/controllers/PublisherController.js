const { publisher } = require("../models");

class PublisherController {
  static async getPublishers(req, res) {
    try {
      let publishers = await publisher.findAll();
      res.json(publishers);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = PublisherController;
