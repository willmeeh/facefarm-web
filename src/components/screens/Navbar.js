import React, { Component } from 'react';

import {
  Link,
  NavLink
} from 'react-router-dom';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { userType: '' };
    this.state.userType = store.getState().session.userType;
  }

  render() {
    return (
      (this.state.userType === 'agricultor' ?
        <nav>
          <div>
            <NavLink to="/">Home</NavLink>
            {" | "}
            <Link to="/protectedroute">Rota protegida</Link>
            {" | "}
            <Link to="/currency">Currency</Link>
            {" | "}
            <Link to="/logout">Logout</Link>
            {" | "}
            <h1>Usuário logado no sistema</h1>
          </div>
        </nav>
        :
        <nav>
          <div>
            <NavLink to="/login">Login</NavLink>
            <h1>Usuário não logado</h1>
          </div>
        </nav>
      )
    );
  }
};

export default Navbar;