
const Sequelize = require('sequelize');

var connection = new Sequelize ('projectFEC', '', '', {
  host: 'localhost',
  dialect: 'postgres',
})

connection.authenticate()
  .then( () => {'mysql is up and running'} )
  .catch ( err=> console.error(err))

module.exports = connection; 

