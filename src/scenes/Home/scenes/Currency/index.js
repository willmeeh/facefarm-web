import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import * as api from './services/api';

class Currency extends Component {
  
  state = { 
    base: '', 
    jsonCurrency: {} 
  };

  handleLoadCurrency = () => {
    api.get({base: this.state.base}).then((jsonCurrency) => {
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