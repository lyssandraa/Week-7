const { Router } = require("express");
const bookRouter = Router();

const {
  getAllBooks,
  addBook,
  updateBook,
  dynamicUpdateBook,
  findBookAndUpdate,
  deleteBook,
  deleteAllBooks,
} = require("./controllers");

// GET to get all books //

bookRouter.get("/books/getAllBooks", getAllBooks);

// POST to add a book //

bookRouter.post("/books/addBook", addBook);

// PUT to update a book's author by title //

bookRouter.put("/books", updateBook);

// PUT to dynamically update a book by title //

bookRouter.put("/books/dynamicUpdateBook", dynamicUpdateBook);

// PUT for findOneAndUpdate function to update book's author by title //

bookRouter.put("/books/findBookAndUpdate", findBookAndUpdate);

// DEL to delete one book by its title //

bookRouter.delete("/books", deleteBook);

// DEL to delete all books //

bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);

module.exports = bookRouter;
