const mongoose = require('mongoose');

const schemaRef = require('../schema/ref.schema');
const schemavalue = require('../schema/email.schema');

function modelList(val) {
  switch (val) {
    case schemaRef.emails:
      return mongoose.model(schemaRef.emails, schemavalue[schemaRef.emails]);
    case schemaRef.verify:
      return mongoose.model(schemaRef.verify, schemavalue[schemaRef.verify]);
    default:
      throw new Error(`no Schema found for ${val}`);
  }
}

module.exports = {
  emails: modelList(schemaRef.emails),
  verify: modelList(schemaRef.verify),
};
