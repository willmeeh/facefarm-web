import React, { Component } from 'react';
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter,
  Link,
  withRouter
} from 'react-router-dom';
import {connect} from 'react-redux';

import permissions from './Permissions'

const RouteWithSubRoutes = (route) => {
  if (route.permissions.search(route.userType) === -1)
    return false;

  if (route.routes) {
    return (
      <div>
        {route.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
      </div>

    )
  } else {
    return (
      <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
      )}/>
    )
  }
}

class UsersRoutes extends Component {
  render() {
    return (
      <div>
        {permissions.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} userType={this.props.user && this.props.user.userType ? this.props.user.userType : false}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.session.user
});

export default withRouter(connect(mapStateToProps)(UsersRoutes));