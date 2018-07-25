'use strict';

const PORT = process.env.PORT;
if(!PORT)throw new
Error('Port is out to Sea.');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (request, response) => response.send('It\'s working, the server!'));
//Fake database
let nextBookId = 1;
const books = [
  {
    id: nextBookId++,
    title: 'Dune',
    author: 'Frank Herbert',
    isbn: 'ISBN_13 9780441013593',
    image_url: 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    description: 'Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.'
  }
];
app.get('/books', (req, res) => {
  res.send(books);
});

app.get('/book/:id', (req, res) => {
  // let SQL = `SELECT ... WHERE id = $1`
  console.log(`Finding book with id = ${req.params.id}`);

  let currentBook = books.find(book => book.id === parseInt(req.params.id));
  console.log(currentBook);
  if (currentBook) {
    res.send(currentBook);
  }
  else {
    res.sendStatus(404);
  }
});

app.post('/books/add', (req, res) => {
  let newBook = {};
  newBook.id = nextBookId++;
  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.isbn = req.body.isbn;
  newBook.image_url = req.body.image_url;
  newBook.description = req.body.description;

  books.push(newBook);
  console.log(books);
  res.sendStatus(201);
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
