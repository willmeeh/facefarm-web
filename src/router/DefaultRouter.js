import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import Login from '../scenes/Login/index';
import CreateAccount from '../scenes/CreateAccount/index';
import About from '../scenes/About/index';


const DefaultRouter = (props) => {
  return (
    <div className="full-screen">
      <Route exact path="/login" component={Login} />
      <Route exact path="/createAccount" component={CreateAccount} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default DefaultRouter;