import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import * as Ferramentas from './api';

import './styles.scss';

class Ferramentas extends Component {

  state = {
    base: {},
    ferramentas: {},

  };

  handleLoadFerramentas = () => {
    FerramentasApi.getFerramentas({
      base: this.state.base ? this.state.base : 'BRL'
    }).then((jsonFerramentas) => {
      console.log(jsonFerramentas);
      this.setState({ jsonFerramentas: jsonFerramentas });
      this.setState({ ferramentas: jsonFerramentas.body.ferramentas });
    });
  }

  handleChangeBase = (event) => {
    this.setState({ base: event.target.value });
  }

  render() {
    return (
      <div>


        <div className="box-body">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>#</th>
                <th>Moeda</th>
                <th>Valor</th>
              </tr>

              <button >
                Teste
              </button>

              {
                Object.entries(this.state.rates).map(([key, value]) =>
                  <tr key={key}>
                    <td>
                      <img className="flag" src={"https://lipis.github.io/flag-icon-css/flags/4x3/" + key.slice(0, 2).toLowerCase() + ".svg"} />
                    </td>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                )

              }

            </tbody>
          </table>
        </div>

      </div>

    );
  }
}

export default withRouter(Ferramentas);