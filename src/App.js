import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import { Button } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'

import LoginForm from './components/LoginForm'
import NotFound from './components/NotFoud'

class App extends Component {
  render() {
    const { activeItem } = this.state || {}


    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={LoginForm} />
          <Route path="/about" component={LoginForm} />
          <Route path="/topics" component={LoginForm} />
          <Route component={NotFound}/>
        </div>
      </Router>
    );
  }
}

export default App;
