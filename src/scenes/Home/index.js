import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import Header from 'scenes/Home/components/Header/index';
import MenuLeft from './components/MenuLeft';
import Footer from './components/Footer';
import MenuRight from './components/MenuRight/index';

import UsersRoutes from '../../router/UsersRoutes';

class Home extends Component {
  render() {
    return (
      <div className="wrapper auto-height">
        <Header user={this.props.user} />
        <aside className="main-sidebar">
          <section className="sidebar auto-height">
            <MenuLeft user={this.props.user} />
          </section>
        </aside>
        <div className="content-wrapper">
          <section className="content-header" ></section>
          <section className="content">
            <div className="row" >
              <div className="col-md-8">
                <UsersRoutes user={this.props.user} />
              </div>
              <div className="col-md-4">
                <MenuRight />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, teste) => {
  return {
    user: state.session.user
  }
};

export default withRouter(connect(mapStateToProps)(Home));
