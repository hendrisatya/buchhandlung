const { Router } = require("express");
const authorRoute = Router();
const { AuthorController } = require("../controllers");

authorRoute.get("/", AuthorController.getAuthors);
authorRoute.post("/add", AuthorController.add);
authorRoute.post("/edit/:id", AuthorController.edit);
authorRoute.get("/delete/:id", AuthorController.delete);
authorRoute.get("/:id", AuthorController.getAuthorInformation);

// route untuk client
authorRoute.delete("/delete/:id", AuthorController.delete);
authorRoute.put("/edit/:id", AuthorController.edit);

module.exports = authorRoute;
