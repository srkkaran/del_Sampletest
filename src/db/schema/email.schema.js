const ref = require('./ref.schema');

const schema = {
  [ref.emails]: {
    email: { type: String, required: true },
  },
  [ref.verify]: {
    emailid: String,
    status: String,
    token: String,
  },
};

module.exports = schema;
