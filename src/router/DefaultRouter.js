import React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter
} from 'react-router-dom';
import RouterCreate from '../extended/RouterCreate';
import Login from '../components/screens/Login';
import CreateAccount from '../components/screens/CreateAccount'

const DefaultRouter = (props) => {
  return (
      <div>
        <Route exact={true} path="/login" component={Login} />
        <Route exact path="/CreateAccount" component={CreateAccount} />
      </div>
  );
}

export default DefaultRouter;