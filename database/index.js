
const Sequelize = require('sequelize');

var connection = new Sequelize ('projectFEC', '', '', {
  host: 'localhost',
  dialect: 'postgres',
  // port: '5432',
})

connection.authenticate()
  .then( () => {'postgres is up and running'} )
  .catch ( err=> console.error(err))

module.exports = connection; 

