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
    
    api.getCurrency({
      base: this.state.base ? this.state.base : 'BRL'
    })
    .then((jsonCurrency) => {
      this.setState({ jsonCurrency: jsonCurrency });
      // this.props.dispatch({type: 'ADD_MESSAGE', cod: 'SUCCESS_SEGUINDO'});
    })
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