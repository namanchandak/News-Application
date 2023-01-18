import React, { Component } from 'react';
import spinner2 from './spinner2.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={spinner2} alt="spinner2" />
      </div>
    )
  }
}

export default Spinner