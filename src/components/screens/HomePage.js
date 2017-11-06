import React, { Component } from 'react';

import Header from './Header';
import MenuLeft from './MenuLeft';
import Footer from './Footer';
import Curremcy from './users/Currency';

class HomePage extends Component {
  constructor(props) {
    super(props);
    console.log("HOMEPAGE PROPS:", props);
  }

  render() {
    return (
      <div className=" skin-green-light sidebar-mini auto-height" >
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

              <Curremcy />

            </section>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;