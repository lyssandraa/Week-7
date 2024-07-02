const express = require("express");

const app = express();

app.use(express.json());

const fakeData = [
  { id: 1, title: "book1", author: "author1", genre: "genre1" },
  { id: 2, title: "book2", author: "author2", genre: "genre2" },
  { id: 3, title: "book3", author: "author3", genre: "genre3" },
];

app.get("/books", (request, response) => {
  console.log(request.path, " :", typeof request.path);
  response.send("Hello from /books");
});

app.get("/books/getAllBooks", (request, response) => {
  const successResponse = {
    message: "success",
    books: fakeData,
  };

  response.send(successResponse);
});

app.post("/books/addBook", (request, response) => {
  // console.log(request.body);

  fakeData.push(request.body);

  const successResponse = {
    message: "success",
    books: fakeData,
  };

  response.send(successResponse);
});

app.put("/books", (request, response) => {
  console.log(request.body);
  const findBook = (x) => {
    return x.title === request.body.title;
  };
  const index = fakeData.findIndex(findBook);

  if (index === -1) {
    const failureResponse = {
      message: `${request.body.title} not found`,
    };
    response.send(failureResponse);
    return;
  }

  fakeData[index].title = request.body.newTitle;

  const successResponse = {
    message: "success",
    books: fakeData[index],
  };

  response.send(successResponse);
});

app.delete("/books/deleteBook", (request, response) => {
  const index = fakeData.findIndex((book) => book.title === request.body.title);

  if (index === -1) {
    const failureResponse = {
      message: `${request.body.title} not found`,
    };
    response.send(failureResponse);
    return;
  }

  fakeData.splice(index, 1);
  const successResponse = {
    message: "success",
    books: fakeData,
  };

  response.send(successResponse);
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
