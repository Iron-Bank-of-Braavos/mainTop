const connection = require('./index');
const Sequelize = require('sequelize');

const userInfo = connection.define ( 'userInfo', {
  creator: { 
      type: Sequelize.STRING,
      allowNull: false },
  projectCreated: {
      type: Sequelize.INTEGER,
      allowNull: false },
  createDate: {
      type: Sequelize.DATE,
      allowNull: false },
  }, {timestamps: false} )

const pledge = connection.define ( 'pledge', {
currentPledge: { 
    type: Sequelize.INTEGER,
    allowNull: false },
backers: {
    type: Sequelize.INTEGER,
    allowNull: false },
projectTitle: {
    type: Sequelize.STRING,
    allowNull: false },
}, {timestamps: false} )

const project = connection.define ( 'drinks', {
    creator : {
        type: Sequelize.STRING,
        allowNull: false},
    projectTitle: { 
        type: Sequelize.STRING,
        allowNull: false },
    projectSubtitle: {
        type: Sequelize.STRING,
        allowNull: false },
    projectLocation: {
        type: Sequelize.STRING,
        allowNull: false },
    projectCategory: {
        type: Sequelize.STRING,
        allowNull: false },
    pledgeGoal: {
        type: Sequelize.INTEGER,
        allowNull: false },
    createDate: {
        type: Sequelize.DATE,
        allowNull: false },
    goalDate: {
        type: Sequelize.DATE,
        allowNull: false },        
    }, {timestamps: false} )

connection.sync ( {force: false} )
  .then ( () => {console.log('succefully synced mysql database') } )
  .catch ( err => console.log( 'mysql database failed ') );

module.exports = { userInfo, pledge, project };