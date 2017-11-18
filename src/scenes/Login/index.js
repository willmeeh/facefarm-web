import React, { Component } from 'react';
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode';
import { Link, withRouter } from 'react-router-dom';

import * as session from '../../services/session/api';
import * as actionCreators from '../../services/session/actions';

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
    session.authenticate({ email: this.state.email, senha: this.state.senha }).then((jsonLogin) => {
      if (jsonLogin.cod) {
        this.setState({ modalTitulo: 'Erro!', modalConteudo: 'Não foi possivel estabelecer conexão com o servidor!1', showModal: true });
        this.state.e = true;
      } else {
        try {
            let decoded = jwtDecode(jsonLogin.token);
            this.props.dispatch(actionCreators.loginUserSuccess(jsonLogin.token));
            this.props.history.push('/home');
        } catch (e) {
          this.setState({ modalTitulo: 'Erro!', modalConteudo: 'Erro ao fazer login, a chave obtida do servidor está inválida', showModal: true });
          this.state.e = true;
        }
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
                      <Link to="/createAccount" className="text-center">
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

Login = withRouter(connect()(Login));

export default Login;