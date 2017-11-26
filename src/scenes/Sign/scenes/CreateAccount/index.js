import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import * as api from './api'
import * as sessionApi from 'services/session/api';

import * as actionCreators from 'services/session/actions';

class CreateAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '', senha: '', nomeCompleto: '', cpf: '', email: '', dataNascimento: '',
      errors: {}
    };
  }

  handleRegister = (e) => {
    e.preventDefault();
    api.create(this.state).then((r) => {
      sessionApi.authenticate({ email: this.state.email, senha: this.state.senha })
      .then((jsonLogin) => {
        try {
          if (jsonLogin && jsonLogin.token) {
            console.log(jsonLogin.token);
            let decoded = jwtDecode(jsonLogin.token);
            this.props.dispatch(actionCreators.loginUserSuccess(jsonLogin.token));
            this.props.history.push('/home');
          } else {
            console.log('Erro ao fazer login!');
          }
        } catch (e) {
          console.log(e);
          this.props.dispatch({ type: 'ADD_MESSAGE', cod: 'ERROR_TOKEN_INVALIDO' })
        }
      });
      console.log("R:", r);
    }).catch((e) => {
      if (e.hasOwnProperty('errors')) {
        this.setState({ errors: e.errors });
      }
    });
  }

  handleChangeNomeCompleto = (event) => {
    this.setState({ nomeCompleto: event.target.value });
  }

  handleChangeLogin = (event) => {
    this.setState({ login: event.target.value });
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handleChangeCPF = (event) => {
    this.setState({ cpf: event.target.value });
  }

  handleChangeDataNascimento = (event) => {
    this.setState({ dataNascimento: event.target.value });
  }

  handleChangeSenha = (event) => {
    this.setState({ senha: event.target.value });
  }

  render() {
    return (
      <div className="row register-background">
        <div className="col-md-12">
          <div className="register-box">
            <div className="register-logo">
              <Link to=""><b>Face</b>Farm</Link>
            </div>
            <div className="register-box-body">
              <p className="login-box-msg">Abrir uma conta</p>
              <form onSubmit={this.handleRegister}>
                <div className="form-group has-feedback">
                  <div className={this.state.errors.nomeCompleto !== undefined ? "has-error" : ""}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nome completo"
                      value={this.state.nomeCompleto}
                      onChange={this.handleChangeNomeCompleto} />
                    <span className="glyphicon glyphicon-user form-control-feedback"></span>
                  </div>
                </div>
                <div className="form-group has-feedback">
                  <div className={this.state.errors.login !== undefined ? "has-error" : ""}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Login"
                      value={this.state.login}
                      onChange={this.handleChangeLogin} />
                    <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                  </div>
                </div>
                <div className="form-group has-feedback">
                  <div className={this.state.errors.email !== undefined ? "has-error" : ""}>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleChangeEmail} />
                    <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                  </div>
                </div>
                <div className="form-group has-feedback">
                  <div className={this.state.errors.cpf !== undefined ? "has-error" : ""}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cpf/Cnpj"
                      value={this.state.CPF}
                      onChange={this.handleChangeCPF} />
                    <span className=" form-control-feedback"></span>
                  </div>
                </div>
                <div className="form-group has-feedback">
                  <div className={this.state.errors.senha !== undefined ? "has-error" : ""}>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Senha"
                      value={this.state.senha}
                      onChange={this.handleChangeSenha} />
                    <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-8">
                    <div className="checkbox icheck">
                      <Link to="/login" className="text-center">
                        Fazer login
                      </Link>
                    </div>
                  </div>
                  <div className="col-xs-4">
                    <button type="submit"
                      className="btn btn-primary btn-block btn-flat">
                      Registrar
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

CreateAccount = withRouter(connect()(CreateAccount));

export default CreateAccount;