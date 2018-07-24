'use strict';

const PORT = process.env.PORT;
if(!PORT)throw new
Error('Port is out to Sea.');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (request, response) => response.send('It\'s working, the server!'));

app.get('/books', (req, res) => {
  res.send([
    {
      'title': 'Dune',
      'author': 'Frank Herbert',
      'isbn': 'ISBN_13 9780441013593',
      'image_url': 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      'description': 'Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.'
    }
  ]);
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
