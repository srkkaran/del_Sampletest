const refSchema = require('../schema/ref.schema');

const {emails } = require('../model/email.model');

async function FindEmail(data) {
  // const email = model(refSchema.emails);
  try {
    const data1 = await emails.find({ email: data.email }).exec();
    return data1;
  } catch (error) {
    console.log('catch and handel this error in middle ware');
    return false;
  }
}

module.exports = FindEmail;
