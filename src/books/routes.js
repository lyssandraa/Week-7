const { Router } = require("express");
const bookRouter = Router();

const { getAllBooks } = require("./controllers");

const { addBook } = require("./controllers");

const { updateBook } = require("./controllers");

// GET to get all books //

bookRouter.get("/books/getAllBooks", getAllBooks);

// POST to add a book //

bookRouter.post("/books/addBook", addBook);

// PUT to update a book's author by title //

bookRouter.put("/books", updateBook);

module.exports = bookRouter;
