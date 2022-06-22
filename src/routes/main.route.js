const Router = require('express').Router();

const homeController = require('../controller/home.controller');

Router.get('/', homeController);

module.exports = Router;
