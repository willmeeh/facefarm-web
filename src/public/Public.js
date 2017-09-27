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

class Public extends Component {
  render() {
    const { activeItem } = this.state || {}

    return (
      <Router>
        <div>

          <Route exact path="/public" component={LoginForm} />
          <Route path="/about" component={LoginForm} />
          <Route path="/topics" component={LoginForm} />

        </div>
      </Router>
    );
  }
}

export default Public;
