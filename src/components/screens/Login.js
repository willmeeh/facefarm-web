import React, { Component } from 'react';
import { connect } from 'react-redux'

import LoginApi from '../../fetchs/LoginApi';
import { setJWTTokenUserType } from '../../store/reducers/actions/session'

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = { email: '', senha: '' };

		this.handleLogin = this.handleLogin.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
	}


	handleLogin = () => {
		LoginApi.login(this.state).then((jsonLogin) => {
			this.props.dispatch(setJWTTokenUserType(jsonLogin.jwt, jsonLogin.userType));
			location.reload();
		}).catch((e) => {
			console.log(e);
		});
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

Login = connect()(Login);

export default Login;