const jwt = require('jsonwebtoken');
const findEmail = require('../db/repo/findEmail.repo');

function sendVerificationController(req, res) {
  const email = req.body.email || null;
  const code = Math.random();
  const token = jwt.sign({
    email,
    validate: code,
  }, process.env.secret, { expiresIn: '10m' });

  if (email) {
    findEmail({ email }).then((data) => {
      if (data.length > 0) {
        // send verification detail to the required email.
        // sorry for implementing a bad auth for fast result and demo purpose
        // eslint-disable-next-line max-len
        // here only jwt token is user for verification no cross check is implemented with the database
        console.log('Please use this token with http://localhost:3000/verify?{token} for verification test', token);
        res.status(200).json(`Please use this token with http://localhost:3000/verify?{token} for verification test : ${token}`);
        //Please use the above generated token for verification with http://localhost:3000/verify?{token}
        // since i need to add gmail here and give access to nodemails would make my email spam
        // If possible you can give me smpt server to configure for testing with nodemail will 
        // configure in minutes thank you 
      } else {
        res.status(511).json(`${email} not found in database , please create an email id first`)
      }
    }).catch((e) => {
      console.log('catch this error in middleware ', e);
      res.status(501).json('A internal error occurred please try again later')
    });
  }else{
    res.status(511).json('Email address required to proceed')
  }
  
}

module.exports = sendVerificationController;
