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
import DefaultRouter from './AgricultorRouter';

let isAuth = false;

class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          
        <PrivateRoute exact={true} path="/" component={HomePage} onEnter={console.log('entrei aqui')} />
        <PrivateRoute exact path="/protectedroute" component={ProtectedRoute}  />
        <PrivateRoute exact path="/currency" component={Currency}  />
        <PrivateRoute exact path="/logout" component={Logout}  />
        <PrivateRoute exact path="/about" component={About}  />
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/CreateAccount" component={CreateAccount} />

        </div>
      </BrowserRouter>
    );
  }
}

// <PrivateRoute exact={true} path="/" component={HomePage} onEnter={console.log('entrei aqui')} />
// <PrivateRoute exact path="/protectedroute" component={ProtectedRoute}  />
// <PrivateRoute exact path="/currency" component={Currency}  />
// <PrivateRoute exact path="/logout" component={Logout}  />
// <PrivateRoute exact path="/about" component={About}  />

// <Route exact path="/login" component={Login} />
// <Route exact path="/CreateAccount" component={CreateAccount} />

// <AgricultorRouter />
// <DefaultRouter />

// <DefaultRouter onEnter={isLoggedIn}/>
// <AgricultorRouter privateRoute={PrivateRoute}/>

// <PrivateRouter component={() => <Redirect to="/" />} />

const PrivateRoute = ({ component: Component, ...rest }) => {
  let stringFFEncoded = localStorage.getItem('facefarm');
  if (stringFFEncoded) {
      let facefarm = JSON.parse(atob(stringFFEncoded));
      isAuth =  facefarm !== undefined && facefarm !== '' && facefarm !== null;
  }
  return (
    <Route {...rest} render={props => (
      isAuth ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
}

function isLoggedIn() {
  // let userType = JSON.parse(localStorage.getItem('facefarm'));
  // return userType !== undefined && userType !== '' && userType !== null;
}

function isNotLogged() {
  return !isLoggedIn();
}

export default AppRouter;