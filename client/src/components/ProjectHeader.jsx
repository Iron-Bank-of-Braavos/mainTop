import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
var pandaLink = 'https://cdn1.img.sputniknews.com/images/105240/54/1052405402.jpg';

const SubHeader = styled.section`
  height: 243px;
  display: flex;
`

const Projectsec_left = styled.section`
  margin-top: 450px;
  margin-left: 0px;
  order: 1;
  width: 80px;
  display: none;
  @media only screen and (min-width: 795px) {
    margin-left: 30px;
    display: inline-block;
    position: relative;
    left: 4.8%;
    margin-top: 53px;
    order: 1;
  }
`
const Projectsecsmaller_left = styled.section`
  margin-left: 26px;
  position: flex;
  order: 1;
  width: auto;
  display: flex;
  @media only screen and (min-width: 795px) {
    display: none;
  }
`
const Userheader = styled.img`
width: 1.5rem; 
height: 1.5rem;
margin-left: 0%;
position: absolute;
border-radius: 50%;
@media only screen and (min-width: 795px) {
  width: 3rem; 
  order: 1;
  height: 3rem;
  }
`
const Username = styled.p`
order: 2;
margin-left: 40px;
margin-top: 3px;
@media only screen and (min-width: 795px) {
  font-size: 14px;
  width: 8rem; 
  height: 3rem;
  position: absolute;
  margin-top: 64px;
  margin-left: 0px;
  }
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
display: inline-block;
margin-top: 330px;
@media only screen and (min-width: 795px) {
  content: normal;
  display: inline;
  margin-top: 10px;
  position: relative;
  left: 10%;
  order: 2;
}
`
const Titlepro = styled.p`
  margin-top: 35px;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 30px;
@media only screen and (min-width: 795px) {
  flex-wrap: wrap;
  width: 42rem;
  font-size: 40px;
  color: black;
  font-weight: 300;
  height: 66px;
  font-family: sans-serif;
    }
`
const SubTitle = styled.p`
margin-left: 33px;
@media only screen and (min-width: 795px) {
  display: inline;
  margin-left: 40px;
  flex-wrap: wrap;
  width: 34rem;
  font-size: 1.2rem;
  color: #656969;
  }
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
        {console.log(this.props,' props')}
        <SubHeader>
            <Projectsec_left>
              <Userheader src= {this.props.userinfo.userAvatar} alt='not found' />
              <Username> By {this.props.userinfo.creator}</Username>
              <Created>{this.props.userinfo.projectCreated} created</Created>
            </Projectsec_left>
          <Titlesec>
            <Titlepro>{this.props.projectinfo.projectTitle.slice(0, 50)}</Titlepro>
            <Projectsecsmaller_left>
              <Userheader src= {this.props.userinfo.userAvatar} alt='not found' />
              <Username> By {this.props.userinfo.creator}</Username>
            </Projectsecsmaller_left>
            <SubTitle>{this.props.projectinfo.projectSubtitle}</SubTitle>
          </Titlesec>
        </SubHeader>
      </div>
    )
  }
}

export default ProjectHeader;