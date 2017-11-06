import React from 'react';
import { 
  Redirect,
  Route,
  Switch
 } from 'react-router-dom';
import RouterCreate from '../extended/RouterCreate';

import ProtectedRoute from '../components/screens/ProtectedRoute';
import About from '../components/screens/About';
import HomePage from '../components/screens/HomePage';
import CreateAccount from '../components/screens/CreateAccount'
import Logout from '../components/screens/Logout'
import Currency from '../components/screens/users/Currency'

const AgricultorRouter = (props) => {
  return (
    <div>
      <Switch>
      <RouterCreate exact path="/" component={HomePage} onEnter={props.isLoggedIn} />
      <RouterCreate exact path="/protectedroute" component={ProtectedRoute} onEnter={props.isLoggedIn} />
      <RouterCreate exact path="/currency" component={Currency} onEnter={props.isLoggedIn} />
      <RouterCreate exact path="/logout" component={ () => <Logout updateUserType={props.updateUserType}/>} />
      <RouterCreate exact path="/about" component={About} onEnter={props.isLoggedIn} />

      <Route component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default AgricultorRouter;