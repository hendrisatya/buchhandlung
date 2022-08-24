const { Router } = require("express");
const publisherRoute = Router();
const { PublisherController } = require("../controllers");

publisherRoute.get("/", PublisherController.getPublishers);

module.exports = publisherRoute;
