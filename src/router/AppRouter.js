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
import ModalMessage from 'components/ModalMessage';

import { requireAuthentication } from '../components/AuthenticatedComponent';
import DefaultRouter from './DefaultRouter';

import FaceFarmLayout from 'scenes/Home/index';
import NotFound from 'scenes/NotFound/index';

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
              }}/>
            )} />
            <Route path="/home" component={requireAuthentication(FaceFarmLayout)} />
            <DefaultRouter />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        {this.props.message.currentMessage && <ModalMessage message={this.props.message.currentMessage} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.message
});

export default connect(mapStateToProps)(AppRouter);

