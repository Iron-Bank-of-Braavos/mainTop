import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const searchPic = './search_magnify.png'

const NavBar = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-size: 100%;
  position: relative;
  height: 68px;
  color: rpg(40, 40, 40);
  font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, "Liberation Sans", FreeSans, sans-serif;
  font-size: 14px;
  font-weight: 400;
  resize: vertical;
  flex-direction: row;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: lightgrey;
  @media only screen and (min-width: 795px) {
    border-color: black;
    height: 66px;
  }
`
const NavBar_bot= styled.section`
display: flex;
justify-content: space-between;
flex-wrap: nowrap;
font-size: 100%;
position: relative;
height: 44px;
color: rpg(40, 40, 40);
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, "Liberation Sans", FreeSans, sans-serif;
font-size: 14px;
font-weight: 400;
border-style: solid;
border-width: 0px 0px 1px 0px;
border-color: black;
@media only screen and (min-width: 795px) {
  display: none;
}
`

const NavBar_logo = styled.section`
  margin-top: 15px;
  margin-left: 38%;
  margin-right: 50%;
  &:hover {
    color: rgb(3, 115, 98);
    cursor: pointer;
  }
  @media only screen and (min-width: 795px) {
    // top: 15px;
    margin-left: initial;
    margin-right: initial;
    position: absolute;
    border-style: hidden;
    left: 50%;
    width: 20rem;
    transform:translate(-50%);
    &:hover {
      color: rgb(3, 115, 98);
      cursor: pointer;
    }
  }
`

const NavBar_left = styled.section`
display: none;
@media only screen and (min-width: 795px) {
  display: inline;
  margin-top: 20px;
  position: relative;
  float: left;
  left: 0;
  opacity: 0.7;
  order: 1;

}
`

const NavBar_leftbot = styled.section`
  margin-top: 15px;
  position: fixed;
  left: 0;
  opacity: 0.75;
  order: 1;
`
const NavBar_right = styled.section`
display: none;
@media only screen and (min-width: 795px) {
  display: inline;
  margin-bottom: 22px;
  position: relative;
  text-align: right;
  align-self: flex-end;
  margin-right: 0;
  opacity: 0.7;
  order: 2;
  }
`
const NavBar_rightbot = styled.section`
  margin-top: 5px;
  position: fixed;
  right: 0;
  opacity: 0.75;
  order: 1;
`

const Title = styled.img`
width: 11.5rem; 
margin-left: 0%;
position: absolute;
@media only screen and (min-width: 795px) {
  width: 11.5rem; 
  margin-left: 50%;
  transform: translate(-50%);
  }
`
const Search_magnify = styled.img`
  width: 1.5rem;
  height: 1.5rem
  padding-left: 0.1rem;
`
const Buttonlinkleft = styled.a`
  margin-left: 1.2rem;
  &:hover {
    color: rgb(3, 115, 98);
    cursor: pointer;
  }
`
const Buttonlinkleftsec = styled.a`
  margin-left: 1.0rem;
  &:hover {
    color: rgb(3, 115, 98);
    cursor: pointer;
  }
`
const Buttonlinkright = styled.a`
  margin-right: 1.2rem;
  &:hover {
    color: rgb(3, 115, 98);
    cursor: pointer;
  }
`
const Buttonlinkrightsec = styled.a`
  margin-right: 1.0rem;
  &:hover {
    color: rgb(3, 115, 98);
    cursor: pointer;
  }
`


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render () {
    return (
      <div className='globalHeader'>
        <NavBar>
          <NavBar_left>
            <Buttonlinkleft>Explore</Buttonlinkleft>
            <Buttonlinkleftsec>Start a project</Buttonlinkleftsec>
          </NavBar_left>
          <NavBar_logo>
            <Title src='./preview-logo-color.png' />
           </NavBar_logo>
           <NavBar_right>
            <Buttonlinkrightsec>Search<Search_magnify src={searchPic} /></Buttonlinkrightsec>
            <Buttonlinkright>Sign in</Buttonlinkright>
          </NavBar_right>
        </NavBar>
        <NavBar_bot>
          <NavBar_leftbot>
            <Buttonlinkleft>Explore</Buttonlinkleft>
            <Buttonlinkleftsec>Start a project</Buttonlinkleftsec>
          </NavBar_leftbot>
           <NavBar_rightbot>
            <Buttonlinkrightsec>Search<Search_magnify src={searchPic} /></Buttonlinkrightsec>
            <Buttonlinkright>Sign in</Buttonlinkright>
          </NavBar_rightbot>
        </NavBar_bot>

      </div>
    )
  }
}

export default Header;