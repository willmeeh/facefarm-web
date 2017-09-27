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

import Admin from './admin/Admin'
import Public from './public/Public'
import NotFound from './components/NotFoud'

class App extends Component {
  render() {
    const { activeItem } = this.state || {}

    return (
      <Router>
        <div>
          <Route exact path="/public" component={Public} />
          <Route exact path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
