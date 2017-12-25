const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello, World!</h1>');
});

app.listen(3000, err => {
  if (err) return console.log(err);
  console.log('Server listening on port 3000');
});
