'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const getBooks = require('./books/getBooks'); - no longer needed because bookHandler contains our function
const bookHandler = require('./modules/handleCreateBook')


const app = express();
app.use(cors());

//using express.json to be able to use req.body data
app.use(express.json());


const PORT = process.env.PORT || 3002;

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Connected to Mongoose'));


app.get('/', (req, res) => res.status(200).send('Welcome to our Library'));

app.get('/books', bookHandler.getBooks);
app.post('/books', bookHandler.postBooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
