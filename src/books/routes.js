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
  findBook,
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

// GET to find a single book by title //

bookRouter.get("/books/findBook/:title", findBook);

module.exports = bookRouter;
