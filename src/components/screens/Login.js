import React, { Component } from 'react';

import LoginApi from '../../fetchs/LoginApi';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = { email: '', senha: '' };

		this.handleLogin = this.handleLogin.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
	}

	handleLogin = () => {
		LoginApi.login(this.state);
	}

	handleChangeEmail = (event) => {
		this.setState({ email: event.target.value });
	}

	handleChangeSenha = (event) => {
		this.setState({ senha: event.target.value });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleLogin}>
					<label>
						Email:
					</label>
					<input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
					<label>
						Senha:
					</label>
					<input type="password" value={this.state.senha} onChange={this.handleChangeSenha} />
					<button type="button" onClick={this.handleLogin}>Enviar button</button>
				</form>
			</div>
		);
	}
}


export default Login;