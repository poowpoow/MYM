import React, { Component } from 'react';
import {Router} from 'react-router';
import io from 'socket.io-client';



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
	  Hello from App.jsx!! Paula här!
        </div>
    );
  }
}
