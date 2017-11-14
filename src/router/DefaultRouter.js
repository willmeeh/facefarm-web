import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import Login from '../scenes/Login/index';
import CreateAccount from '../scenes/CreateAccount/index';
import About from '../scenes/About/index';
import NotFound from '../scenes/NotFound/index';

const DefaultRouter = (props) => {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/createAccount" component={CreateAccount} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </div>
  );
}

export default DefaultRouter;