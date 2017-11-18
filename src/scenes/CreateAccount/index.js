import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as api from './services/api';

class CreateAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '', senha: '', nomeCompleto: '', cpf: '', email: '', dataNascimento: ''
    };
  }

  handleRegister = (e) => {
    e.preventDefault();
    alert('não implementado')
    api.create(this.state);
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome completo"
                    value={this.state.nomeCompleto}
                    onChange={this.handleChangeNomeCompleto} />
                  <span className="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div className="form-group has-feedback">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Login"
                    value={this.state.login}
                    onChange={this.handleChangeLogin} />
                  <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                </div>
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
                    type="text"
                    className="form-control"
                    placeholder="Cpf/Cnpj"
                    value={this.state.CPF}
                    onChange={this.handleChangeCPF} />
                  <span className=" form-control-feedback"></span>
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


export default CreateAccount;