const { Router } = require("express");
const bookRouter = Router();

const { getAllBooks } = require("./controllers");

// GET to get all books //

bookRouter.get("/books/getAllBooks", getAllBooks);

module.exports = bookRouter;
