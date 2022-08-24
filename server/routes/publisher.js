const { Router } = require("express");
const publisherRoute = Router();
const { PublisherController } = require("../controllers");

publisherRoute.get("/", PublisherController.getPublishers);
publisherRoute.post("/add", PublisherController.add);
publisherRoute.post("/edit/:id", PublisherController.edit);
publisherRoute.get("/delete/:id", PublisherController.delete);

module.exports = publisherRoute;
