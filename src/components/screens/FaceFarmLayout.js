import React, { Component } from 'react';
import { Link, withRouter, Route , BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux'

import Header from './Header';
import MenuLeft from './MenuLeft';
import Footer from './Footer';
import Curremcy from './users/Currency';
import UsersRoutes from '../../router/UsersRoutes';

import WeatherForecast from './users/WeatherForecast'
import CommodityCurrency from './users/CommodityCurrency'
import Currency from './users/Currency'


class FaceFarmLayout extends Component {
  constructor(props) {
    super(props);
    console.log("HOMEPAGE PROPS:", props);
  }

  render() {
    return (
      <div className="wrapper auto-height">
          <Header updateUserType={this.props.updateUserType} />
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