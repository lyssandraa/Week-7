const { Router } = require("express");
const bookRouter = Router();

const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  dynamicUpdateBook,
  findBookAndUpdate,
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

// DEL to delete a book by its title //

bookRouter.delete("/books", deleteBook);

module.exports = bookRouter;
