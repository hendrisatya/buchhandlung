const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    message: "Home Page",
  });
});

const authorRoutes = require("./author");
const publisherRoutes = require("./publisher");
const categoryRoutes = require("./category");
const bookRoutes = require("./book");

route.use("/authors", authorRoutes);
route.use("/categories", categoryRoutes);
route.use("/publishers", publisherRoutes);
route.use("/books", bookRoutes);

module.exports = route;
