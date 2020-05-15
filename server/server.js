const express = require('express');
// const path = require('path');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/ingredients/main.js', (req, res) => {
  fetch('http://52.24.39.99:3001/dist/main.js', {
    method: 'GET',
  })
    .then((module) => module.arrayBuffer())
    .then((module) => {
      const enc = new TextDecoder('utf-8');
      res.send(enc.decode(module));
    })
    .catch((err) => console.error(err));
});

app.get('/top/main.js', (req, res) => {
  fetch('FILL_IN', {
    method: 'GET',
  })
    .then((module) => module.arrayBuffer())
    .then((module) => {
      const enc = new TextDecoder('utf-8');
      res.send(enc.decode(module));
    })
    .catch((err) => console.error(err));
});

app.get('/steps/main.js', (req, res) => {
  fetch('FILL_IN', {
    method: 'GET',
  })
    .then((module) => module.arrayBuffer())
    .then((module) => {
      const enc = new TextDecoder('utf-8');
      res.send(enc.decode(module));
    })
    .catch((err) => console.error(err));
});


app.use('/:id', express.static(`${__dirname}/../dist/`, {
  setHeaders: (res) => {
    res.set('Access-Control-Allow-Origin', '*');
  },
}));

app.listen(port, () => console.log(`listening on port ${port}`));
