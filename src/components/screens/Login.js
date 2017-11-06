import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import LoginApi from '../../fetchs/LoginApi';
import { setJWTTokenUserType } from '../../store/actions/session'

class Login extends Component {
	state = { email: '', senha: '' };

	handleLogin = (e) => {
		e.preventDefault();
		LoginApi.login(this.state).then((jsonLogin) => {
			console.log(jsonLogin);
			this.props.dispatch(setJWTTokenUserType(jsonLogin.jwt, jsonLogin.userType));
			this.props.history.push('/');
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
			<div className="row login-background">
				<div className="col-md-12">
					<div className="login-box">
						<div className="login-logo">
							<Link to=""><b>Face</b>Farm</Link>
						</div>
						<div className="login-box-body">
							<p className="login-box-msg">Faça login para iniciar sua sessão</p>
							<form onSubmit={this.handleLogin}>
								<div className="form-group has-feedback">
									<input
										type="email"
										className="form-control"
										placeholder="Email"
										value={this.state.email}
										onChange={this.handleChangeEmail} />
									<span className="glyphicon glyphicon-envelope form-control-feedback"></span>
								</div>
								<div className="form-group has-feedback">
									<input
										type="password"
										className="form-control"
										placeholder="Senha"
										value={this.state.senha}
										onChange={this.handleChangeSenha} />
									<span className="glyphicon glyphicon-lock form-control-feedback"></span>
								</div>
								<div className="row">
									<div className="col-xs-8">
										<div className="checkbox icheck">
											<Link to="/CreateAccount" className="text-center">
												Criar nova conta
											</Link>
										</div>
									</div>
									<div className="col-xs-4">
										<button type="submit"
											className="btn btn-primary btn-block btn-flat">
											Entrar
										 </button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Login = connect()(Login);

export default withRouter(Login);