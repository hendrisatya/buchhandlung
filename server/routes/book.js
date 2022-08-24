const { Router } = require("express");
const bookRoute = Router();
const { BookController } = require("../controllers");

bookRoute.get("/", BookController.getBooks);
bookRoute.post("/add", BookController.add);
bookRoute.post("/edit/:id", BookController.edit);
bookRoute.get("/delete/:id", BookController.delete);

module.exports = bookRoute;
