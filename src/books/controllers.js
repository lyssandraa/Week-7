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

module.exports = {
  getAllBooks: getAllBooks,
  addBook: addBook,
  updateBook: updateBook,
};
