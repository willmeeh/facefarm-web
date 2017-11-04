import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import RouterCreate from '../extended/RouterCreate';
import Login from '../components/screens/Login';
import CreateAccount from '../components/screens/CreateAccount'

const DefaultRouter = (props) => {
  return (
    <div>
      <Switch>
        <RouterCreate exact path="/login" component={() => props.onEnter() ? <Redirect to="/" /> : <Login />} />
        <RouterCreate exact path="/CreateAccount" component={CreateAccount} />
        <Route component={() => <Redirect to="/login" />} />
      </Switch>
    </div>
  );
}

export default DefaultRouter;