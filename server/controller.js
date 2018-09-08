require('babel-polyfill');
var Promise = require('bluebird');
var db = require('../database/index');
module.exports = {
  fetch: (req, res) => {

      res.status(200).send('fetch');
  },
  post: (req, res) => {
    // const { username } = req.body;

      res.status(200).send('post');
      
  },
  delete: (req, res) => {

  },
}