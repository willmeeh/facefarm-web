import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { resetApplication } from 'services/session/actions'

export function requireAuthentication(Component) {

	class AuthenticatedComponent extends React.Component {

		componentWillMount() {
			this.checkAuth(this.props.isAuthenticated);
		}

		componentWillReceiveProps(nextProps) {
			this.checkAuth(nextProps.isAuthenticated);
		}

		checkAuth(isAuthenticated) {
			if (!isAuthenticated) {
				this.props.dispatch(resetApplication());
				this.props.history.push('/login');
			}
		}

		render() {
			return (
				<div>
					{this.props.isAuthenticated
						? <Component {...this.props} />
						: <Redirect to={{
							pathname: '/login',
							state: { from: this.props.location }
						}} />
					}
				</div>
			)
		}
	}

	const mapStateToProps = (state) => ({
		isAuthenticated: state.session.isAuthenticated
	});

	return withRouter(connect(mapStateToProps)(AuthenticatedComponent));

}