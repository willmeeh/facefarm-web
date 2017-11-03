import React, { Component } from 'react';

import {
	Route,
	BrowserRouter,
	Switch,
	Redirect
} from 'react-router-dom';

import Navbar from '../components/screens/Navbar';
import Login from '../components/screens/Login';
import NotFound from '../components/screens/NotFound';
import ProtectedRoute from '../components/screens/ProtectedRoute';
import About from '../components/screens/About';
import HomePage from '../components/screens/HomePage';
import CreateAccount from '../components/screens/CreateAccount'
import Logout from '../components/screens/Logout'

import Currency from '../components/screens/users/Currency'


class AppRouter extends Component {
	constructor(props) {
		super(props);
		this.state = { userType: '' };
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={() => isLoggedIn() ? <HomePage /> : <Redirect to="/login" /> } />
						<Route exact path="/login" component={() => isLoggedIn() ? <Redirect to="/" /> : <Login />  } />
						<Route exact path="/protectedroute" component={() => isLoggedIn() ? <ProtectedRoute /> : <Redirect to="/login" />} />
						<Route exact path="/currency" component={() => isLoggedIn() ? <Currency /> : <Redirect to="/login" />} />
						<Route exact path="/logout" component={() => isLoggedIn() ? <Logout /> : <Redirect to="/login" />} />
						<Route exact path="/about" component={About} />
						<Route component={() => <Redirect to="/" />} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

function isLoggedIn() {
	let userType = store.getState().session.userType;
	return userType !== undefined && userType !== '' && userType !== null;
}

export default AppRouter;