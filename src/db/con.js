const mongoose = require('mongoose');

async function con() {
  try {
    await mongoose.connect(process.env.mongourl + process.env.dbname);
    console.log('DB Connected');
  } catch (error) {
    console.log(' catch this error in a middleware');
    // error catch middleware coding should be added
  }
}

module.exports = con;
