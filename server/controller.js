require('babel-polyfill');
var Promise = require('bluebird');
var db = require('../database/model.js');
module.exports = {
  fetch: (req, res) => {
    var back= {};
    db.userinfo.findAll({}).then(data1 =>{
      back.userinfo = data1;
      db.pledge.findAll({}).then( data2 => {
        back.pledge = data2;
        db.project.findAll({}).then ( data3 => {
          back.project = data3;
          res.status(200).send(back);
        }).catch( err => {console.log('projectdb err')})
      }).catch(err => {console.log('pledgedb err')})
    }).catch(err => {console.log('userinfodb err')})
  },
  post: (req, res) => {
      res.status(200).send('post');
  },
  delete: (req, res) => {
    res.status(200).send('delete');
  },
}