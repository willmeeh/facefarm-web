import React, { Component } from 'react';
import { connect } from 'react-redux'

import LoginApi from '../../fetchs/LoginApi';
import { setJWTTokenUserType } from '../../store/reducers/actions/session'

class BackgroundImage extends Component {


	componentWillMount = () => {
		var w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0],
			x = w.innerWidth || e.clientWidth || g.clientWidth,
			y = w.innerHeight || e.clientHeight || g.clientHeight;

		this.setState({ x: x, y: y });
	}

	render() {
		return (
			<div>
				<img
					className='bg' src={'https://source.unsplash.com/' + this.state.x + 'x' + this.state.y + '/?nature'} />
			</div>
		);
	}

};

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
				<div style={{ backgroundImage: 'url(https://source.unsplash.com/100x100/?nature)' }} className="hold-transition login-page full-screen">
					<div className='bg' src={''} className="login-box">
						<div className="login-logo">
							<a href="/"><b>Face</b>Farm</a>
						</div>
						<div className="login-box-body">
							<p className="login-box-msg">Faça login para iniciar sua sessão</p>
							<form onSubmit={this.handleLogin}>
								<div className="form-group has-feedback">
									<input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail} />
									<span className="glyphicon glyphicon-envelope form-control-feedback"></span>
								</div>
								<div className="form-group has-feedback">
									<input type="password" className="form-control" placeholder="Senha" value={this.state.senha} onChange={this.handleChangeSenha} />
									<span className="glyphicon glyphicon-lock form-control-feedback"></span>
								</div>
								<div className="row">
									<div className="col-xs-8">
										<div className="checkbox icheck">
											<a href="/createaccount" className="text-center">Criar nova conta</a>
										</div>
									</div>
									<div className="col-xs-4">
										<button type="button" onClick={this.handleLogin} className="btn btn-primary btn-block btn-flat" >Login</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
		);
	}
}

Login = connect()(Login);

export default Login;