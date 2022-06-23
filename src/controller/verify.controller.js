const jwt = require('jsonwebtoken');

function verifyController(req, res) {
  const token = req.query.verify || null;
  if (token) {
    jwt.verify(token, process.env.secret, (err, decoded) => {
      if (err) {
        res.status(511).json('The token given is not valid! please generate a new token or try later');
      }
      if (decoded) {
        // update the email as verified
        console.log(decoded);
        res.status(200).json('Email Verified !!');
      }
    });
  } else {
    res.status(511).json('verification failed')
  }
}

module.exports = verifyController;
