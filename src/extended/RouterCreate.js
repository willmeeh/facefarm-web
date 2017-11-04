import React from 'react';

import {
  Route,
  Redirect
} from 'react-router-dom';


const RouterCreate = (props) => {
  return (
    (props.onEnter !== undefined ?
      (props.onEnter() ?
        <Route {...props} />
        :
        <Redirect to="/login" />
      )
      :
      <Route {...props} />
    )
  );
}

export default RouterCreate;
