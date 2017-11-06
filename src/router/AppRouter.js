import React, { Component } from 'react';

import {
  Route,
  BrowserRouter,
  Switch,
  Redirect
} from 'react-router-dom';

import NotFound from '../components/screens/NotFound';

import ProtectedRoute from '../components/screens/ProtectedRoute';

import About from '../components/screens/About';
import HomePage from '../components/screens/HomePage';
import CreateAccount from '../components/screens/CreateAccount'
import Logout from '../components/screens/Logout'
import Currency from '../components/screens/users/Currency'

import Login from '../components/screens/Login'

import AgricultorRouter from './AgricultorRouter';
import DefaultRouter from './DefaultRouter';

let isAuth = false;

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: sessionStorage.getItem('userType')
    };

    console.log(this.state.userType);

  }

  updateUserType = (userType) => {
    console.log(userType);
    this.setState({ userType: userType });
  }

  render() {
    return (
      (this.state.userType === 'agricultor' ?
        <BrowserRouter>
          <AgricultorRouter onEnter={isLoggedIn} updateUserType={this.updateUserType} />
        </BrowserRouter>
        :
        <BrowserRouter>
          <DefaultRouter onEnter={isLoggedIn} updateUserType={this.updateUserType} />
        </BrowserRouter>
      )
    );
  }
}
function isLoggedIn() {
  let userType = JSON.parse(localStorage.getItem('facefarm'));
  return userType !== undefined && userType !== '' && userType !== null;
}

function isNotLogged() {
  return !isLoggedIn();
}

export default AppRouter;