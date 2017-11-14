import React, { Component } from 'react';

import {
  Route,
  BrowserRouter,
  Switch,
  withRouter,
  Redirect,
  browserHistory
} from 'react-router-dom';

import { requireAuthentication } from '../components/AuthenticatedComponent';
import DefaultRouter from './DefaultRouter';

import FaceFarmLayout from '../scenes/Home/index';

class AppRouter extends Component {

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
            <Route path="/home" component={requireAuthentication(FaceFarmLayout)} />
            <DefaultRouter />
          </Switch>
        </BrowserRouter>
      )
    );
  }
}
export default AppRouter;

