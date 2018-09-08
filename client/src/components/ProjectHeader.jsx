import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
var pandaLink = 'https://cdn1.img.sputniknews.com/images/105240/54/1052405402.jpg';

const SubHeader = styled.section`
  height: 243px;
  display: flex;
`
// const Projectsec = styled.section`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   flex-wrap: nowrap;
//   font-size: 100%;
//   position: relative;
//   font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, "Liberation Sans", FreeSans, sans-serif;
//   font-size: 14px;
//   font-weight: 400;
//   resize: vertical;
//   @media only screen and (min-width: 795px) {
//     border-color: black;
//   }
// `

const Projectsec_left = styled.section`
  display: none;
  @media only screen and (min-width: 795px) {
    display: inline-block;
    position: relative;
    left: 4.8%;
    margin-top: 53px;
    order: 1;
  }
`
const Userheader = styled.img`
width: 3rem; 
height: 3rem;
margin-left: 0%;
position: absolute;
border-radius: 50%;
// @media only screen and (min-width: 795px) {
//   width: 11.5rem; 
//   margin-left: 50%;
//   transform: translate(-50%);
//   }
`
const Username = styled.p`
width: 8rem; 
height: 3rem;
position: absolute;
margin-top: 64px;
font-size: 14px;
// @media only screen and (min-width: 795px) {
//   width: 11.5rem; 
//   margin-left: 50%;
//   transform: translate(-50%);
//   }
`
const Created = styled.p`
 width: 8rem;
 height: 3rem;
 font-size: 14px;
 color: grey;
 margin-top: 85px;
 font-weight: 300;
`
const Titlesec = styled.section`
display: none;
@media only screen and (min-width: 795px) {
  display: inline;
  margin-top: 10px;
  position: relative;
  left: 10%;
  order: 2;
}
`
const Titlepro = styled.p`
  flex-wrap: wrap;
  width: 42rem;
  font-size: 40px;
  color: black;
  font-weight: 300;
  height: 66px;
  font-family: sans-serif;
`
const SubTitle = styled.p`
  flex-wrap: wrap;
  width: 34rem;
  font-size: 1.2rem;
  color: #656969;
  // font-weight: 300;
`


class ProjectHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render () {
    return (
      <div>
        <SubHeader>
          {/* <Projectsec> */}
            <Projectsec_left>
              <Userheader src= {pandaLink} alt='not found' />
              <Username> By Ramy Badie</Username>
              <Created>3 created</Created>
            </Projectsec_left>
          {/* </Projectsec> */}
          <Titlesec>
            <Titlepro>Unstable Unicorns: Control & Chaos (The Backercorn Project) </Titlepro>
            <SubTitle>Make new friends. Destroy them. Unicorns forever.</SubTitle>
          </Titlesec>
        </SubHeader>
      </div>
    )
  }
}

export default ProjectHeader;