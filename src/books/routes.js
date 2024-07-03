const { Router } = require("express");
const bookRouter = Router();

const { getAllBooks } = require("./controllers");

const { addBook } = require("./controllers");

// GET to get all books //

bookRouter.get("/books/getAllBooks", getAllBooks);

// POST to add a book //

bookRouter.post("/books/addBook", addBook);

module.exports = bookRouter;
