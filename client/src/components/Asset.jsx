import React, { Component } from 'react';
import axios from 'axios';
const Faker = require('faker');
var randomName = Faker.name.findName();
var randomPic = Faker.image.technics();
var headPic = 'https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png';
var mainPic = 'https://d24h4out7wreu3.cloudfront.net/product_images/p/687270.f56.00716S7ay1Cm2MjUAAA-650x650-b-p.jpg';

class Asset extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render () {
    return (
      <div>
        <h3 >{randomName}</h3>
        <img src={mainPic} alt='not found' />
        <img src={headPic} alt='not found' />
      </div>
    )
  }
}

export default Asset;