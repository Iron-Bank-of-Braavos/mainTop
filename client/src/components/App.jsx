import React, { Component } from 'react';
import axios from 'axios';
import Asset from './Asset.jsx';
import Header from './Header.jsx'
import ProjectHeader from './ProjectHeader.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render () {
    return (
      <div>
        <Header />
        <ProjectHeader />
        {/* <Asset /> */}
      </div>
    )
  }
}

export default App;