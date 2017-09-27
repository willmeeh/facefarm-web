import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import { Button } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'

import LoginForm from '../components/LoginForm'
import NotFound from '../components/NotFoud'

class Admin extends Component {
  render() {
    const { activeItem } = this.state || {}

    return (
      <Router>
        <div>
          <Route exact path="/admin" component={LoginForm} />
        </div>
      </Router>
    );
  }
}

export default Admin;
