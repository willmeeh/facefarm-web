import React, { Component } from 'react';
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter,
  Link,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';

import permissions from './Permissions'

const RouteWithSubRoutes = (props) => {
  if (!props.userType || props.permissions.search(props.userType) === -1)
    return false;

  if (props.routes) {
    return (
      <div>
        {props.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} userType={props.userType} />
        ))}
      </div>
    )
  } else {
    return (
      <Route path={props.path} render={childProps => (
        <props.component {...childProps} routes={props.routes} />
      )} />
    )
  }
}

class UsersRoutes extends Component {
  render() {
    return (
      <div>
        {permissions.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} userType={this.props.user && this.props.user.userType} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.session.user
});

export default UsersRoutes;