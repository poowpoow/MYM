import React, { Component } from 'react';
import {Router} from 'react-router';
import io from 'socket.io-client';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hallåå!
      </div>
    );
  }
}
