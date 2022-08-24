const { Router } = require("express");
const authorRoute = Router();
const { AuthorController } = require("../controllers");

authorRoute.get("/", AuthorController.getAuthors);
authorRoute.post("/add", AuthorController.add);
authorRoute.post("/edit/:id", AuthorController.edit);
authorRoute.get("/delete/:id", AuthorController.delete);

module.exports = authorRoute;
