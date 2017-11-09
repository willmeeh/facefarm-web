import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import CurrencyApi from '../../../fetchs/CurrencyApi';

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = { base: '', jsonCurrency: {} };

    this.handleLoadCurrency = this.handleLoadCurrency.bind(this);
    this.handleChangeBase = this.handleChangeBase.bind(this);
  }

  handleLoadCurrency = () => {
    CurrencyApi.get({base: this.state.base}).then((jsonCurrency) => {
      console.log(jsonCurrency);
      this.setState({ jsonCurrency: jsonCurrency });
    });
  }

  handleChangeBase = (event) => {
    this.setState({ base: event.target.value });
  }

  render() {
    return (
      <div>
        <label>
          Currency:
          </label>
        <input type="text" value={this.state.base} onChange={this.handleChangeBase} />
        <p></p>
        <button type="button" onClick={this.handleLoadCurrency}>Load</button>

        <p>{JSON.stringify(this.state.jsonCurrency)}</p>

      </div>

    );
  }
}

export default withRouter(connect()(Currency));