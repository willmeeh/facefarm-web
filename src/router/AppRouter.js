import React, { Component } from 'react';

import {
  Route,
  BrowserRouter,
  Switch,
  withRouter,
  Redirect,
  browserHistory
} from 'react-router-dom';

import ProtectedRoute from '../components/screens/ProtectedRoute';

import NotFound from '../components/screens/NotFound'
import About from '../components/screens/About';
import FaceFarmLayout from '../components/screens/FaceFarmLayout';
import CreateAccount from '../components/screens/CreateAccount'
import Logout from '../components/screens/Logout'
import Currency from '../components/screens/users/Currency'

import Login from '../components/screens/Login'

import AgricultorRouter from './AgricultorRouter';
import PrivateRouter from '../extended/PrivateRouter';
import DefaultRouter from './DefaultRouter';
import UsersRoutes from './UsersRoutes';

import WeatherForecast from '../components/screens/users/WeatherForecast'
import CommodityCurrency from '../components/screens/users/CommodityCurrency'

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

//   <BrowserRouter>
//   <AgricultorRouter  updateUserType={this.updateUserType} />
// </BrowserRouter>

  render() {
    return (
      (
        <BrowserRouter >
          <Switch>
              <Route exact path="/" component={() => (
                <Redirect to={{
                  pathname: '/home',
                  state: { from: this.props.location }
                }}/>
              )} />
              <Route path="/home" component={FaceFarmLayout} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/CreateAccount" component={CreateAccount} />
              <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      )
    );
  }
}
// <HomePage updateUserType={this.updateUserType}/>
// <DefaultRouter  updateUserType={this.updateUserType} />
export default AppRouter;

