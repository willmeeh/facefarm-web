import React, { Component } from 'react';
import { Link, withRouter, Route , BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux'

import Header from './components/Header';
import MenuLeft from './components/MenuLeft';
import Footer from './components/Footer';

import UsersRoutes from '../../router/UsersRoutes';

class FaceFarmLayout extends Component {
  render() {
    return (
      <div className="wrapper auto-height">
          <Header />
          <aside className="main-sidebar">
            <section className="sidebar auto-height">
              <MenuLeft />
            </section>
          </aside>
          <div className="content-wrapper">
            <section className="content-header" ></section>
            <section className="content">

              <UsersRoutes />
            
            </section>
          </div>
          <Footer />
      </div>
    );
  }
}

export default withRouter(connect()(FaceFarmLayout));