import React, { Component } from 'react';

import {
	Link,
	NavLink
} from 'react-router-dom';


class App extends Component {
	render() {
		if (this.props.logged_in) {
			return (
				<nav>
					<div>
						<NavLink to="/">Home</NavLink>
						{" | "}
						<Link to="/login" >Login</Link>
						{" | "}
						<a href="/rotaprotegida">Rota protegida</a>
						<h1>Usuário logado no sistema</h1>
					</div>
				</nav>
			);
		} else {
			return (
				<nav>
					<div>
						<NavLink to="/">Home</NavLink>
						{" | "}
						<Link to="/login" >Login</Link>
						{" | "}
						<Link to="/about">About</Link>
						{" | "}
						<Link to="/protectedroute">Rota protegida</Link>
						{" | "}
						<Link to="/createaccount">Criar conta</Link>
						{" | "}
						<h1>Usuário não logado</h1>
					</div>
				</nav>
			);
		}
	}
}

export default App;