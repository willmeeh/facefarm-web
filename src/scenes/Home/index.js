import React, { Component } from 'react';
import { Link, withRouter, Route , BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux'

import Header from './components/Header';
import MenuLeft from './components/MenuLeft';
import Footer from './components/Footer';

import UsersRoutes from '../../router/UsersRoutes';

class Home extends Component {
  render() {
    return (
      <div className="wrapper auto-height">
          <Header />
          <aside className="main-sidebar">
            <section className="sidebar auto-height">
              <MenuLeft user={this.props.user} />
            </section>
          </aside>
          <div className="content-wrapper">
            <section className="content-header" ></section>
            <section className="content">
              <UsersRoutes user={this.props.user} />
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
