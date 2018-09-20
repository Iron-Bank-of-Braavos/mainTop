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
      userinfo: {creator: 'brandon', userAvatar: 'https://cdn1.img.sputniknews.com/images/105240/54/1052405402.jpg', projectCreated: 3},
      projectinfo: 
        {projectTitle: 'dbnotconnect', 
         projectSubtitle: 'dbnotconnect', 
         projectMainpic: '/fail.png',
         projectCategory: 'dbnotconnect', 
         projectLocation: 'dbnotconnect',
         createDate: 'dbnotconnect',
         goalDate: 'dbnotconnect',
         pledgeGoal: 0,
        },
      pledgeinfo: {currentPledge: 0, backers: 0, },
      // userinfos: [],
      // projectinfos: [],
      // pledgeinfos: [],
    }
  }

  componentDidMount(){
    var currentIndex = Math.floor(Math.random() * 100);
    var params = {projectid : currentIndex};
    // axios.get('api/home').then( res => {
    //   this.setState({
    //     userinfos: res.data.userinfo,
    //     projectinfos: res.data.project,
    //     pledgeinfos: res.data.pledge,
    //   })
    // }).catch( err => {console.log( 'axios get error')})
    axios.post('api/home', params).then( 
      (res) => {
        this.setState({
          userinfo: res.data.userinfo[0],
          projectinfo: res.data.project[0],
          pledgeinfo: res.data.pledge[0],
      })
    }).catch( err => {console.log('err in post', err)});
  }

  render () {
    return (
      <Roll>
        <Header />
        <ProjectHeader userinfo={this.state.userinfo} projectinfo= {this.state.projectinfo}/>
        <Asset projectinfo = {this.state.projectinfo}  pledgeinfo = {this.state.pledgeinfo}/>
      </Roll>
    )
  }
}

export default App;