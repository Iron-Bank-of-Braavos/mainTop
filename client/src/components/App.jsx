import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Asset from './Asset.jsx';
import Header from './Header.jsx'
import ProjectHeader from './ProjectHeader.jsx';

const Roll = styled.div`

`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: [{creator: 'brandon', userAvatar: 'https://cdn1.img.sputniknews.com/images/105240/54/1052405402.jpg', projectCreated: 3}],
      projectinfo: [{}, {}, {}, 
        {projectTitle: 'dbnotconnect', 
         projectSubtitle: 'dbnotconnect', 
         projectMainpic: 'dbnotconnect',
         projectCategory: 'dbnotconnect', 
         projectLocation: 'dbnotconnect',
         createDate: 'dbnotconnect',
         goalDate: 'dbnotconnect',
         pledgeGoal: 0,
        }],
      pledgeinfo: [{currentPledge: 0, backers: 0, }],
    }
  }

  componentDidMount(){
    axios.get('api/home').then( res => {
      console.log(res);
      this.setState({
        userinfo: res.data.userinfo,
        projectinfo: res.data.project,
        pledgeinfo: res.data.pledge,
      })
    }).catch( err => {console.log( 'axios get error')})
  }

  render () {
    return (
      <Roll>
        <Header />
        <ProjectHeader userinfo={this.state.userinfo[0]} projectinfo= {this.state.projectinfo[3]}/>
        <Asset projectinfo = {this.state.projectinfo[3]}  pledgeinfo = {this.state.pledgeinfo[0]}/>
      </Roll>
    )
  }
}

export default App;