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


class AppRouter extends Component {
	constructor(props) {
		super(props);
		this.state = { userType: 'colono'};
	}


	render() {
		if (this.state.userType === 'admin') {
			return (
				<BrowserRouter>
					<div>
						<Navbar />
						<Switch>
							<Route exact path="/" component={NotFound} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/protectedroute" component={() => isLoggedIn() ? <ProtectedRoute /> : <Redirect to="/login" />} />
							<Route exact path="/about" component={About} />
							<Route component={NotFound}/>
						</Switch>
					</div>
				</BrowserRouter>
			);
		} else {
			return (
				<BrowserRouter>
					<div>
						<Navbar />
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/protectedroute" component={() => isLoggedIn() ? <ProtectedRoute /> : <Redirect to="/login" />} />
							<Route exact path="/about" component={About} />
							<Route exact path="/createaccount" component={CreateAccount}/>
							<Route component={NotFound}/>
						</Switch>
					</div>
				</BrowserRouter>
			);
		}
	}
}

function isLoggedIn() {
	return false;
}

export default AppRouter;