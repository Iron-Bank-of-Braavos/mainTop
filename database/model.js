const connection = require('./index');
const Sequelize = require('sequelize');

const userinfo = connection.define ( 'userinfo', {
    projectid: {
        type: Sequelize.INTEGER,
        allowNull: false},
    creator: { 
        type: Sequelize.STRING,
        allowNull: false },
    userAvatar: {
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
    projectid: {
        type: Sequelize.INTEGER,
        allowNull: false},
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

const project = connection.define ( 'projects', {
    projectid: {
        type: Sequelize.INTEGER,
        allowNull: false},
    creator : {
        type: Sequelize.STRING,
        allowNull: false},
    projectMainpic : {
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
  .then ( () => {console.log('succefully synced postgres database') } )
  .catch ( err => console.log( 'postgres database failed ', err) );

module.exports = { userinfo, pledge, project };
