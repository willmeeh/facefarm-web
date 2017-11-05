import React, { Component } from 'react';
import { connect } from 'react-redux'

import { resetApplication } from '../../store/actions/session'

class Logout extends Component {

	constructor(props) {
		super(props);

		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout = () => {
    this.props.dispatch(resetApplication());
    location.reload();
	}

	render() {
		return (
			<div>
					<button type="button" onClick={this.handleLogout}>Logout</button>
			</div>
		);
	}
}
Logout = connect()(Logout);

export default Logout;