
const Sequelize = require('sequelize');

var connection = new Sequelize ('projectFEC', 'projectFEC', 'noway', {
  host: '172.18.0.2',
  dialect: 'postgres',
  port: '5432',
})

connection.authenticate()
  .then( () => {'postgres is up and running'} )
  .catch ( err=> console.error(err))

module.exports = connection; 

