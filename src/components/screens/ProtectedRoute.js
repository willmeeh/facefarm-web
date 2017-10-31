import React, { Component } from 'react';

class ProtectedRoute extends Component {
	render() {
		return (
			<div>
				<p>Rota protegida saía, intruso desgraçado!</p>
			</div>
		);
	}
}

export default ProtectedRoute;