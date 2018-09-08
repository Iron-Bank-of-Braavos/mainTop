import React, { Component } from 'react';
import axios from 'axios';
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
  display: inline;
  position: relative;
  left: 5%;
  order: 1;
  width: 100%;
  @media only screen and (min-width: 795px) {
    // width: 80%;
`
const Projectsec_right = styled.section`
  display: inline;
  position: relative;
  right: 5%;
  order: 2;
  border-style: solid;
  border-width: 3.2px 0px 0px 0px;
  border-color: rgb(3, 115, 98);;
  width: 39%;
  @media only screen and (min-width: 795px) {
    // width: 80%;
`
const Mainpic = styled.img`
  display:none;
  @media only screen and (min-width: 795px) {
    display: block;
    width: calc(19.69/24 * 100%);
    height: 390px;
  }
  `
const Pledgenum = styled.p`
  color: #037362;
  opacity: 0.75;
  font-size: 24px;
  margin: 18px 0px 3px 0px;
`
const Pledgegoal = styled.p`
  color: rgb(101, 105, 105);
  font-size: 14px;
  margin: 0;
  opacity: 0.75;
`
const Numberstyle = styled.p`
color: black;
font-size: 24px;
margin: 13px 0px 2px 0px ;
opacity: 0.75;
`
const Backproject = styled.button`
  background-color: rgb(69, 173, 135);
  font-size: 16px;
  font-weight: 100;
  font-family: 100;
  text-align: center;
  color: rgb(255, 255, 255);
  text-decoration-style: solid;
  height: 3rem;
  margin-top: 30px;
  width: 100%;
  &:hover {
    background-color: #037362;
    margin-top: 28.5px;
    cursor: pointer;
  }
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
  margin-right: 19px;
  height: 15px;
  &:hover {
    cursor: pointer;
  }
`
const Hypebotlink = styled.img`
  margin-right: 19px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`
const Botlinksec = styled.section`
  margin-top: 13px;
`

class Asset extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render () {
    return (
      <div>
        <Maincontent>
          <Projectsec_left>
            <Mainpic src={mainPic} alt='not found' />
            <Botlinksec>
               <Hypebotlink src='./leaf.jpg' alt='not found'/>
               <Hypebotlink src='./compass.jpg' alt='not found'/>
               <Hypebotlink src='./locate.jpg' alt='not found'/>
            </Botlinksec>
          </Projectsec_left>
          <Projectsec_right>
            <Pledgenum>  $1,302,958 </Pledgenum>
            <Pledgegoal>  pledged of $50,000 goal  </Pledgegoal>
            <Numberstyle>  14,158 </Numberstyle>
            <Pledgegoal> backers </Pledgegoal>
            <Numberstyle> 5 </Numberstyle>
            <Pledgegoal> days to go </Pledgegoal>
            <Backproject> Back this project </Backproject>
            <Butnlink>
              <Followpro><img src='./bookmark-black-shape.svg' alt='not found' style={{width: '10%'}}/> Follow Project</Followpro>
              <Hypesec>
                <Hypelink src='./facebook.png' alt='not found' style={{order: '1'}}/>
                <Hypelink src='./twittler.png' alt='not found' style={{order: '2'}}/>
                <Hypelink src='./mail.png' alt='not found' style={{order: '3'}}/>
                <Hypelink src='./signtag.png' alt='not found' style={{order: '4', marginRight: '0px'}}/>
              </Hypesec>
            </Butnlink>
          </Projectsec_right>
        </Maincontent>
      </div>
    )
  }
}

export default Asset;