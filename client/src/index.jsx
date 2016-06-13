import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './App';
import About from './About';
import MenuExample from './Menu';

require("./style/app.less");

ReactDOM.render(
  <Router>
	<Route path="/" component={App}/>
  <Route path="/about" component={About}/>
	<Route path="/:filter" component={App}/>
  </Router>, document.getElementById('root')
);
