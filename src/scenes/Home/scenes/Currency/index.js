import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import * as currencyApi from './api';

import './styles.scss';

class Currency extends Component {

  state = {
    base: '',
    jsonCurrency: {},
    rates: []
  };

  handleLoadCurrency = () => {
    currencyApi.getCurrency({
      base: this.state.base ? this.state.base : 'BRL'
    }).then((jsonCurrency) => {
      this.setState({ jsonCurrency: jsonCurrency });
      this.setState({ rates: jsonCurrency.body.rates });
    });
  }

  handleChangeBase = (event) => {
    this.setState({ base: event.target.value });
  }

  render() {
    return (
      <div>


        <div className="form-inline">
          <label htmlFor="sel1">Moeda base: </label>
          <select value={this.state.base} onChange={this.handleChangeBase} className="form-control" id="sel1">
            <option value="USD">US dollar</option>
            <option value="JPY">Japanese yen</option>
            <option value="BGN">Bulgarian lev</option>
            <option value="CZK">Czech koruna</option>
            <option value="DKK">Danish krone</option>
            <option value="GBP">Pound sterling</option>
            <option value="HUF">Hungarian forint</option>
            <option value="PLN">Polish zloty</option>
            <option value="RON">Romanian leu</option>
            <option value="SEK">Swedish krona</option>
            <option value="CHF">Swiss franc</option>
            <option value="NOK">Norwegian krone</option>
            <option value="HRK">Croatian kuna</option>
            <option value="RUB">Russian rouble</option>
            <option value="TRY">Turkish lira</option>
            <option value="AUD">Australian dollar</option>
            <option value="BRL">Brasil real</option>
            <option value="CAD">Canadian dollar</option>
            <option value="CNY">Chinese yuan renminbi</option>
            <option value="HKD">Hong Kong dollar</option>
            <option value="IDR">Indonesian rupiah</option>
            <option value="ILS">Israeli shekel</option>
            <option value="INR">Indian rupee</option>
            <option value="KRW">South Korean won</option>
            <option value="MXN">Mexican peso</option>
            <option value="MYR">Malaysian ringgit</option>
            <option value="NZD">New Zealand dollar</option>
            <option value="PHP">Philippine piso</option>
            <option value="SGD">Singapore dollar</option>
            <option value="THB">Thai baht</option>
            <option value="ZAR">South African rand</option>
            <option value="ISK">Icelandic krona</option>
          </select>
          <button type="button"
            className="btn btn-success pull-right"
            onClick={this.handleLoadCurrency}
            disabled={(this.state.tipo === 'publicacao' && !this.state.texto ? true : false)}>
            Buscar
							</button>
        </div>

        <p>{JSON.stringify(this.state.jsonCurrency.rates)}</p>

        <div className="box-body">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>#</th>
                <th>Moeda</th>
                <th>Valor</th>
              </tr>

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

export default withRouter(Currency);