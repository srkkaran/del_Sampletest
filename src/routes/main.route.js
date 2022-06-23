const Router = require('express').Router();

const homeController = require('../controller/home.controller');
const addEmailController = require('../controller/addEmail.controller');
const sendVerificationController = require('../controller/sendVerification.controller');
const verifyController = require('../controller/verify.controller');

Router.get('/', homeController);
Router.post('/addemail', addEmailController);
Router.post('/sendverification', sendVerificationController);
Router.get('/verify', verifyController);

module.exports = Router;
