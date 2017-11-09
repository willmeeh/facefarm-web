import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter,
  Link,
  withRouter
} from 'react-router-dom';
import RouterCreate from '../extended/RouterCreate';
import PrivateRouter from '../extended/PrivateRouter';
import permissions from './Permissions'

// variavel utilizada somente para ilustracao
const currentUserPermission = 'agricultor';

const RouteWithSubRoutes = (route) => {

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
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
      )}/>
    )
  }
}

const UsersRoutes = () => (
    <div>
    {permissions.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
);

export default withRouter(UsersRoutes);