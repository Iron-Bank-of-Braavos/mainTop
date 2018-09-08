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
    }
  }


  render () {
    return (
      <Roll>
        <Header />
        <ProjectHeader />
        <Asset />
        <p>hi</p>
      </Roll>
    )
  }
}

export default App;