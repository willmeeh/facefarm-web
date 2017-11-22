import React, { Component } from 'react';

import {
  Route,
  BrowserRouter,
  Switch,
  withRouter,
  Redirect,
  browserHistory
} from 'react-router-dom';
import { connect } from 'react-redux'

import { requireAuthentication } from 'components/AuthenticatedComponent/index';
import DefaultRouter from './DefaultRouter';

import FaceFarmLayout from 'scenes/Home/index';
import NotFound from 'scenes/NotFound/index';
import MessageLog from 'scenes/MessageLog/index';

class AppRouter extends Component {

  render() {
    return (
      <div className="full-screen">
        <BrowserRouter >
          <Switch>
            <Route exact path="/" component={() => (
              <Redirect to={{
                pathname: '/home',
                state: { from: this.props.location }
              }} />
            )} />
            <Route path="/home" component={requireAuthentication(FaceFarmLayout)} />
            <DefaultRouter />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        <MessageLog />
      </div>
    );
  }
}
export default connect()(AppRouter);

