import React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    let stringFFEncoded = localStorage.getItem('facefarm');
    let isAuth = false;
    if (stringFFEncoded) {
        let facefarm = JSON.parse(atob(stringFFEncoded));
        isAuth =  facefarm !== undefined && facefarm !== '' && facefarm !== null;
    }
    return (
      <Route {...rest} render={props => (
        isAuth ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )
}

export default PrivateRoute;