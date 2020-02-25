const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Merhaba!');
});

app.listen(3000, () => {
  console.log('Listening!');
});
