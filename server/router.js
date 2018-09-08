const express = require('express');
const Router = express.Router();
const controller = require('./controller.js');

Router.route('/home')
  .get(controller.fetch)
  .post(controller.post)
  .delete(controller.delete)


module.exports = Router;