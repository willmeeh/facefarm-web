import React, { Component } from 'react';

import {
  Route,
  BrowserRouter,
  Switch,
  Redirect
} from 'react-router-dom';

import Navbar from '../components/screens/Navbar';
import NotFound from '../components/screens/NotFound';

import AgricultorRouter from './AgricultorRouter';
import DefaultRouter from './DefaultRouter'

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
			userType: sessionStorage.getItem('userType')
		};

  }

  updateUserType = (userType) => {
    console.log(userType);
    this.setState({userType: userType});
  }

  render() {
    return (
      (this.state.userType === 'agricultor' ?
        <BrowserRouter>
          <AgricultorRouter onEnter={isLoggedIn} updateUserType={this.updateUserType}/>
        </BrowserRouter>
        :
        <BrowserRouter>
          <DefaultRouter onEnter={isLoggedIn} updateUserType={this.updateUserType}/>
        </BrowserRouter>
      )
    );
  }
}

function isLoggedIn() {
  let userType = sessionStorage.getItem('userType');
  return userType !== undefined && userType !== '' && userType !== null;
}

function isNotLogged() {
  return !isLoggedIn();
}

export default AppRouter;