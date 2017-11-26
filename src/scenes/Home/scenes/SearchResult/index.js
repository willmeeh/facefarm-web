import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import * as searchResultApi from 'scenes/Home/scenes/SearchResult/api'
import Users from 'scenes/Home/components/Users/index'

class Currency extends Component {

  state = {
    searchResult: []
  }

  componentDidMount() {
    this.search();
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(() => {
      this.search();
    }, 0)
  }

  search = () => {
    const params = `/${this.props.match.params.searchParam}/10/10`
    searchResultApi.searchUserByName(params)
      .then((r) => {
        this.setState({ searchResult: r.searchResult })
      }).catch((e) => {

      });
  }

  render() {
    return (
      <div>
        {this.state.searchResult.length === 0 && <h1> Nenhum usuário encontrado! </h1>}
        <Users users={this.state.searchResult} />
      </div>

    );
  }
}

export default withRouter(Currency);