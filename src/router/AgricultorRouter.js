import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import RouterCreate from '../extended/RouterCreate';
import PrivateRouter from '../extended/PrivateRouter';

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
        <Route exact path="/" component={() => <HomePage updateUserType={props.updateUserType} />}  />
        <Route exact path="/protectedroute" component={ProtectedRoute}  />
        <Route exact path="/currency" component={Currency}  />
        <Route exact path="/logout" component={() => <Logout updateUserType={props.updateUserType} />} />
        <Route exact path="/about" component={About}  />

        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default AgricultorRouter;