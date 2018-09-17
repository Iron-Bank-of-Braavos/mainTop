import React, { Component } from 'react';
import styled from 'styled-components';
const Faker = require('faker');
var randomName = Faker.name.findName();
var randomPic = Faker.image.technics();
var headPic = 'https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png';
var mainPic = 'https://d24h4out7wreu3.cloudfront.net/product_images/p/687270.f56.00716S7ay1Cm2MjUAAA-650x650-b-p.jpg';

const Maincontent = styled.section`
  height: 800px;
  display: flex;
  width: 100%;
  font-weight: 200;
  font-family: sans-serif;
  cursor: auto;
`

const Projectsec_left = styled.section`
position: absolute;
margin-top: -240px;
width: auto;
@media only screen and (min-width: 795px) {
  margin-top: 0px;
  display: inline;
  position: relative;
  left: 5%;
  order: 1;
  width: 100%;
`
const Projectsec_right = styled.section`
margin-top: 330px;
border-style: solid;
border-width: 3.2px 0px 0px 0px;
border-color: rgb(3, 115, 98);;
margin-left: 30px;
position: flex;
@media only screen and (min-width: 795px) {
  font-size: 8px;
  margin-left: 0px;
  margin-top: -1px;
  display: inline;
  position: relative;
  order: 2;
  border-style: solid;
  border-width: 3.2px 0px 0px 0px;
  border-color: rgb(3, 115, 98);;
  width: 39%;
`
const Mainpic = styled.img`
  width: 100vh;
  height: 366.188px;
  @media only screen and (min-width: 795px) {
    display: block;
    width: calc(19.69/24 * 100%);
    height: 390px;
  }
  `
const Pledgenum = styled.p`
font-size: 15px;
order: 1;
color: #037362;
margin: 18px 0px 3px 0px;
opacity: 0.75;
@media only screen and (min-width: 795px) {
  font-size: 24px;
}
`
const Pledgegoal = styled.p`
  color: rgb(101, 105, 105);
  font-size: 14px;
  margin: 0;
  opacity: 0.75;
  @media only screen and (min-width: 795px) {
    font-size: 14px;
  }
`
const Numberstyle = styled.p`
color: black;
font-size: 14px;
margin: 13px 0px 2px 0px ;
opacity: 0.75;
order: 2;
@media only screen and (min-width: 795px) {
  font-size: 24px;
}
`
const Backproject = styled.button`
margin-top: 100px;
margin-rightL 0px;
background-color: rgb(69, 173, 135);
font-size: 16px;
font-weight: 100;
font-family: 100;
text-align: center;
color: rgb(255, 255, 255);
text-decoration-style: solid;
height: 3rem;
width: 90%;
&:hover {
  background-color: #037362;
  margin-top: 28.5px;
  cursor: pointer;
}
}
@media only screen and (min-width: 795px) {
  margin-right:15%;
  width: 100%;
  margin-top: 30px;
`
const Followpro = styled.button`
  background-color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 100;
  font-family: 100;
  text-align: center;
  color: black;
  text-decoration-style: solid;
  height: 3rem;
  margin-top: 20px;
  width: 50%;
  border-color:lightgrey;
  &:hover {
    background-color: rgb(255, 255, 255);
    margin-top: 19px;
    border-color: black;
    cursor: pointer;
  }
`
const Butnlink = styled.section`
  display: flex;
  flex-direction: row;
`
const Hypesec = styled.section`
  display: flex;
  justify-content: flex-end;
  width:50%
  flex-direction: row;
`
const Hypelink = styled.img`
  margin-top: 35px;
  margin-right: 50px;
  height: 15px;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 795px) {
    margin-right: 19px;
  }
`

const Hypelinklast = styled.img`
  margin-top: 35px;
  margin-right: 70px;
  height: 15px;
  &:hover {
    cursor: pointer;
  }
  order: 4;
  margin-right: 0pxl
  @media only screen and (min-width: 795px) {
    margin-right: 19px;
  }
`

const Hypebotlink = styled.img`
  height: 30px;
  order: 1;
  &:hover {
    cursor: pointer;
  }
`
const Botlinksec = styled.section`
border-style: solid;
border-width: 1px 0px 1px 0px;
border-color: lightgrey;
height: 30px;
margin-top: 290px;
@media only screen and (min-width: 795px) {
  border-style: none;
  margin-top: 13px;
  position: flex;
`
const BotLetter = styled.p`
  font-size: 12px;
  margin-top: 8px;
  margin-left: 5px;
  margin-right: 15px;
  order:2;
`
const Botbox = styled.section`
  float: left;
  display: flex;
  margin-left: 30px;
  @media only screen and (min-width: 795px) {
    margin-left: 0px;
  }
` 

const Rightbotsec = styled.section`
  font-size: 11.5px;
  margin-top: 20px;
`

const HyperLinkRight = styled.a`
  text-decoration: underline;
`

const Infobox = styled.section`
  float: left;
  margin-left: 30px;
  @media only screen and (min-width: 795px) {
    margin-left: 0px;
    float: none;
  }
`

class Asset extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.getDatediff= this.getDatediff.bind(this);
    this.numberFormatting = this.numberFormatting.bind(this);
  }

  getDatediff() {
    var milisec = Date.parse(this.props.projectinfo.goalDate) - Date.parse(this.props.projectinfo.createDate);
    var date = Math.floor(milisec / 99360000);
    return date
  }
  numberFormatting(num) {
    num = num.toString().split('');
    if (num.length > 3) {
      num.splice(num.length - 6, 0, ',');
    }
    if(num.length > 6 ) {
      num.splice(num.length - 3, 0, ',');
    }
    num = num.join('');
    return num
  }

  render () {
    return (
      <div>
        <Maincontent>
          <Projectsec_left>
            <Mainpic src={this.props.projectinfo.projectMainpic} alt='not found' />
            <Botlinksec>
               <Botbox>
                  <Hypebotlink src='./leaf.jpg' alt='not found'/>
                  <BotLetter>Project We Love</BotLetter>
               </Botbox>
               <Botbox>
                 <Hypebotlink src='./compass.jpg' alt='not found'/>
                 <BotLetter>{this.props.projectinfo.projectCategory}</BotLetter>
               </Botbox>
               <Botbox>
                 <Hypebotlink src='./locate.jpg' alt='not found'/>
                 <BotLetter>{this.props.projectinfo.projectLocation}</BotLetter>
               </Botbox>
            </Botlinksec>
          </Projectsec_left>
          <Projectsec_right>
            <Infobox>
              <Pledgenum>  ${this.numberFormatting(this.props.pledgeinfo.currentPledge) } </Pledgenum>
              <Pledgegoal>  pledged of ${this.numberFormatting(this.props.projectinfo.pledgeGoal)} goal  </Pledgegoal>
            </Infobox>
            <Infobox>
              <Numberstyle>  {this.props.pledgeinfo.backers} </Numberstyle>
              <Pledgegoal> backers </Pledgegoal>
            </Infobox>
            <Infobox>
              <Numberstyle> {this.getDatediff()} </Numberstyle>
              <Pledgegoal> days to go </Pledgegoal>
            </Infobox>
            <Backproject> Back this project </Backproject>
            <Butnlink>
              <Followpro><img src='./bookmark-black-shape.svg' alt='not found' style={{width: '10%'}}/> Follow Project</Followpro>
              <Hypesec>
                <Hypelink src='./facebook.png' alt='not found' style={{order: '1'}}/>
                <Hypelink src='./twittler.png' alt='not found' style={{order: '2'}}/>
                <Hypelink src='./mail.png' alt='not found' style={{order: '3'}}/>
                <Hypelinklast src='./signtag.png' alt='not found'/>
              </Hypesec>
            </Butnlink>
              <Rightbotsec>
                <HyperLinkRight>All or nothing.</HyperLinkRight> This project will only be funded if it reaches its goal by {this.props.projectinfo.goalDate}
              </Rightbotsec>
          </Projectsec_right>
        </Maincontent>
      </div>
    )
  }
}

export default Asset;