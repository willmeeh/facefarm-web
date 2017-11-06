import React, { Component } from 'react';

import Header from './Header';
import MenuLeft from './MenuLeft';
import Footer from './Footer';
// import Navbar from './Navbar'

class HomePage extends Component {
	render() {
		return (
			<div className=" skin-green-light sidebar-mini auto-height" >
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
              
              <h1>Aqui vão as outras coisas</h1>

            </section>
          </div>
          <Footer />
        </div>
			</div>
		);
	}
}

export default HomePage;