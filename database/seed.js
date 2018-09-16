const Faker = require('faker');
const db = require('./model');


for(var i = 0; i< 100; i++) {
  var creator= Faker.name.findName();
  var projectTitle= Faker.lorem.sentence();
  var createDate= Faker.date.between('2018-01-01', '2018-09-01');
  var address= Faker.address.streetName() + ',' + Faker.address.stateAbbr();
  var userthumb;
  if(i < 50) {
    userthumb = `https://randomuser.me/api/portraits/thumb/women/${i}.jpg`
  }else {
    userthumb = `https://randomuser.me/api/portraits/thumb/men/${i - 50}.jpg`
  }
  const user = [
    {
      creator: creator,
      userAvatar: userthumb,
      projectCreated: Faker.random.number(1000),
      createDate: createDate,
    }
  ];
  const pledgedata = [
    {
      currentPledge: Faker.random.number({min: 1000, max: 100000000}),
      backers: Faker.random.number({min: 10, max: 10000}),
      projectTitle: projectTitle,
    }
  ];
  const projectdata = [
    {
      creator: creator,
      projectMainpic: `https://s3-us-west-1.amazonaws.com/kickstarter0data/new/${i + 1}.jpg`,
      projectTitle: projectTitle,
      projectSubtitle: Faker.lorem.sentence(),
      projectLocation: address,
      projectCategory: Faker.lorem.word(),
      pledgeGoal: Faker.random.number({min: 100000, max: 10000000}),
      createDate: createDate,
      goalDate: Faker.date.between('2018-09-02', '2018-10-01')
    }
  ]
  db.userinfo.sync({ force: false }).then(() => {
    db.userinfo.bulkCreate(user).then(() => {
      db.pledge.sync({ force: false }).then(() => {
        db.pledge.bulkCreate(pledgedata).then(() => {
          db.project.sync({ force: false }).then(() => {
            db.project.bulkCreate(projectdata).then(() => {
                console.log('userinfo seeded'); 
            });
          });
        });
      });
    });
  });
}