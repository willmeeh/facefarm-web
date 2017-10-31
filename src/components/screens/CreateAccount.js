import React, { Component } from 'react';

import CreateAccountApi from '../../fetchs/CreateAccountApi';

class CreateAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '', senha: '', nomeCompleto: '', cpf: '', email: '', dataNascimento: ''
    };

    this.handleLogin = this.handleLogin.bind(this);

    this.handleChangeNomeCompleto = this.handleChangeNomeCompleto.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeCPF = this.handleChangeCPF.bind(this);
    this.handleChangeDataNascimento = this.handleChangeDataNascimento.bind(this);
    this.handleChangeSenha = this.handleChangeSenha.bind(this);
  }

  handleLogin = () => {
    CreateAccountApi.create(this.state);
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
      <div>
        <form onSubmit={this.handleLogin}>
          <label>
            Nome Completo:
					</label>
          <input type="text" value={this.state.nomeCompleto} onChange={this.handleChangeNomeCompleto} />

          <label>
            Login:
					</label>
          <input type="text" value={this.state.login} onChange={this.handleChangeLogin} />

          <label>
            Email:
					</label>
          <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />

          <label>
            CPF:
					</label>
          <input type="text" value={this.state.CPF} onChange={this.handleChangeCPF} />

          <label>
            Data nascimento:
					</label>
          <input type="text" value={this.state.dataNascimento} onChange={this.handleChangeDataNascimento} />

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


export default CreateAccount;