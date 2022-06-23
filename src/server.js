require('dotenv').config();
const express = require('express');

const app = express();
const db = require('./db/con');
const Router = require('./routes/main.route');

app.use(express.json());
db();

app.use('/', Router);
const port = process.env.port || 4000;
app.listen(port, () => {
  if (process.env.NODE_ENV === 'DEV') {
    console.log('Server running in port :', port);
  }
});
