const { Router } = require("express");
const bookRouter = Router();

const { getAllBooks } = require("./controllers");

const { addBook } = require("./controllers");

const { updateBook } = require("./controllers");

const { deleteBook } = require("./controllers");

// GET to get all books //

bookRouter.get("/books/getAllBooks", getAllBooks);

// POST to add a book //

bookRouter.post("/books/addBook", addBook);

// PUT to update a book's author by title //

bookRouter.put("/books", updateBook);

// DEL to delete a book by its title //

bookRouter.delete("/books", deleteBook);

module.exports = bookRouter;
