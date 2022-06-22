require('dotenv').config();
const app = require('express')();

const db = require('./db/con');
const Router = require('./routes/main.route');
db();
app.use('/', Router);
const port = process.env.port || 4000;
app.listen(port, () => {
  if (process.env.NODE_ENV === 'DEV') {
    console.log('Server running in port :', port);
  }
});
