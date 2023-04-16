import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const path = require('path');
const express = require('express');
import fetch from 'node-fetch';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)

const app = express();

// serve static files in public directory
app.use(express.static(path.resolve(path.dirname(''), 'public')));

// serve sum.html file
app.get('/sum.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'sum.html'));
});

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/result', function (req, res) {
  const message = req.query.message;
  const imageUrl = req.query.imageUrl;
  res.render('result', { message: message, imageUrl: imageUrl });
});

app.get('/getData', function (req, res) {
  const number = req.query.number;

  if (!number) {
    res.render('getData', {
      message: 'Lack of Parameter!',
      imageUrl: 'https://images.dog.ceo/breeds/pyrenees/n02111500_6881.jpg',
    });
  } else if (isNaN(number)) {
    res.render('getData', {
      message: 'Wrong Parameter!',
      imageUrl: 'https://images.dog.ceo/breeds/shiba/shiba-3i.jpg',
    });
  } else {
    const n = parseInt(number);
    const summation = (n * (n + 1)) / 2;
    const apiUrl = `http://localhost:3000/result?message=The summation of 1 to ${number} = ${summation}&imageUrl=https://images.dog.ceo/breeds/mix/sheltie-pomeranian-rylie.jpg`;
    fetch(apiUrl)
      .then(response => response.text())
      .then(data => {
        res.send(data);
      })

  }
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
