'use strict';
const express = require('express');
const app = express();

const PORT = process.env.PORT;
if(!PORT)throw new
Error('Port is out to Sea.');



app.get('/', (request, response) => response.send('It\'s working, the server!'));


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

