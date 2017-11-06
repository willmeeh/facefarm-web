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
          <AgricultorRouter  updateUserType={this.updateUserType} />
        </BrowserRouter>
        :
        <BrowserRouter>
          <DefaultRouter  updateUserType={this.updateUserType} />
        </BrowserRouter>
      )
    );
  }
}

export default AppRouter;