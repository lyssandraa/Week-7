const { request } = require("express");
const Book = require("./model");

const getAllBooks = async (request, response) => {
  const allBooks = await Book.find({});
  const successResponse = {
    message: "success",
    allBooks: allBooks,
  };

  response.send(successResponse);
};

const addBook = async (request, response) => {
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
};

// update a book's authour by title //

const updateBook = async (request, response) => {
  const updateBook = await Book.updateOne(
    { title: request.body.title },
    { $set: { author: request.body.author } }
  );

  const successResponse = {
    message: "success",
    updateBook: updateBook,
  };
  response.send(successResponse);
};

// dynamically update a book by title //

const dynamicUpdateBook = async (request, response) => {
  const filterObj = { title: request.body.title };
  const updateObj = { [request.body.updateKey]: request.body.updateValue };

  const dynamicUpdateBook = await Book.updateOne(filterObj, {
    $set: updateObj,
  });

  const successResponse = {
    message: "success",
    dynamicUpdateBook: dynamicUpdateBook,
  };
  response.send(successResponse);
};

// findOneAndUpdate function //

const findBookAndUpdate = async (request, response) => {
  const findBookAndUpdate = await Book.findOneAndUpdate(
    { title: request.body.title },
    { author: request.body.author },
    { new: true }
  );
  const successResponse = {
    message: "success",
    findBookAndUpdate: findBookAndUpdate,
  };
  response.send(successResponse);
};

const deleteBook = async (request, response) => {
  const deleteBook = await Book.deleteOne({ title: request.body.title });

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };
  response.send(successResponse);
};

module.exports = {
  getAllBooks: getAllBooks,
  addBook: addBook,
  updateBook: updateBook,
  dynamicUpdateBook: dynamicUpdateBook,
  findBookAndUpdate: findBookAndUpdate,
  deleteBook: deleteBook,
};
