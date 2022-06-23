const findEmail = require('../db/repo/findEmail.repo');
const createEmail = require('../db/repo/createEmail.repo');

function addEmailController(req, res) {
  if (req.body.email) {
    //  for fast coding/error finding ternary operator is used will change to if else in production 
    findEmail({ email: req.body.email }).then((data) => {
      data.length > 0 ? (res.status(500).json(`${req.body.email} cant be added again, already added in DB`)) : 
        createEmail({email : req.body.email}) ? (
        res.status(200).json(`${req.body.email} created and a verification email send please validate within 10mins`) ) : ( 
        res.status(500).json('Please try again later, There was an error'));
    });
  } else {
    res.json('please send a email id to request a verification');
  }
}

module.exports = addEmailController;
