import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import LoginApi from '../../fetchs/LoginApi';
import { setJWTTokenUserType } from '../../store/actions/session'


import ModalMessage from './ModalMessage';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '', senha: '', e: false, showModal: false,
      modalTitulo: '', modalConteudo: ''
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    LoginApi.login({ email: this.state.email, senha: this.state.senha }).then((jsonLogin) => {
      if (jsonLogin.cod) {
        this.setState({ modalTitulo: 'Erro!', modalConteudo: 'Não foi possivel estabelecer conexão com o servidor!1', showModal: true });
        this.state.e = true;
      } else {
        this.props.dispatch(setJWTTokenUserType(jsonLogin.jwt, jsonLogin.userType));
        // this.props.updateUserType(jsonLogin.userType);
        this.props.history.push('/');
      }
    }).catch((e) => {
      if (e) {
        this.setState({ modalTitulo: 'Erro!', modalConteudo: 'Não foi possivel estabelecer conexão com o servidor!2', showModal: true });
        this.state.e = true;
      }
    });
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value, showModal: false });
  }

  handleChangeSenha = (event) => {
    this.setState({ senha: event.target.value, showModal: false });
  }

  render() {
    return (

      <div className="row login-background">
        <ModalMessage showModal={this.state.showModal} titulo={this.state.modalTitulo} conteudo={this.state.modalConteudo} message={'teste'} />

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

export default Login;