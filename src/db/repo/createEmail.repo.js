const { emails } = require('../model/email.model');

async function createEmail(data) {
  try {
    const data1 = await emails.create({ email: data.email });
    return data1;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('catch and handel this error in middle ware');
    return false;
  }
}

module.exports = createEmail;
