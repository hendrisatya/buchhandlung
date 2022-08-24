const { Router } = require("express");
const bookRoute = Router();
const { BookController } = require("../controllers");

bookRoute.get("/", BookController.getBooks);

module.exports = bookRoute;
