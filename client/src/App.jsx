import React, { Component } from 'react';
import {Router} from 'react-router';
import io from 'socket.io-client';
//import './css/reset.css';
//import './css/styles.css';

const socket = io('http://localhost:8000');

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
	  Hello from App.jsx!!
        </div>
    );
  }
}
