require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Book = require("./books/model");

const connection = require("./db/connection");

const app = express();

app.use(express.json());

connection();

// GET to get all books //

app.get("/books/getAllBooks", async (request, response) => {
  const allBooks = await Book.find({});
  const successResponse = {
    message: "success",
    allBooks: allBooks,
  };

  response.send(successResponse);
});

// POST to add a new book //

app.post("/books/addBook", async (request, response) => {
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
});

// PUT to update a book's auhtor by title //

app.put("/books", async (request, response) => {
  const updateBook = await Book.updateOne(
    { title: request.body.title },
    { $set: { author: request.body.author } }
  );

  const successResponse = {
    message: "success",
    updateBook: updateBook,
  };
  response.send(successResponse);
});

// DEL to delete a book by its title //

app.delete("/books", async (request, response) => {
  const deleteBook = await Book.deleteOne({ title: request.body.title });

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };
  response.send(successResponse);
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
