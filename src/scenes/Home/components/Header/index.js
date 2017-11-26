import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';

import Search from 'scenes/Home/components/Header/components/Search/index';

class Header extends Component {

  handleLogout = () => {
    this.props.dispatch(resetApplication());
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <aside className="main-header">

          <Link to="/" className="logo">
            <span className="logo-mini"><b>F</b>F</span>
            <span className="logo-lg"><b>Face</b>FARM</span>
          </Link>


          <nav className="navbar navbar-static-top">
            <span className="sidebar-toggle" data-toggle="offcanvas" role="button">
              <span className="sr-only">Toggle navigation</span>
            </span>
            <Search />
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                
                <li className="dropdown notifications-menu">
                  <a href="" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell-o"></i>
                    <span className="label label-warning">2</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">Você possui 2 notificação</li>
                    <li>
                      <div className="slimScrollDiv">
                        <ul className="menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-comment text-aqua"></i>
                              Beltrano comentou seu post<br />
                              <div className="pull-right">10 de Junho as 17:45</div>

                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-comment text-aqua"></i>
                              Ciclano comentou seu post<br />
                              <div className="pull-right">8 de Junho as 09:33</div>
                            </a>
                          </li>
                        </ul>
                        <div className="slimScrollBar"></div>
                        <div className="slimScrollRail"></div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown user user-menu">
                  <a href="" className="dropdown-toggle" data-toggle="dropdown">
                    <img src="/resources/images/user_image.png" className="user-image" alt="User Image" />
                    <span className="hidden-xs">
                      {this.props.user && this.props.user.nomeCompleto}
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="user-header">
                      <img src="/resources/images/user_image.png" className="img-circle" alt="User Image" />

                      <p>
                        Fulano de tal - Plantador de arroz
                        <small>Membro desde 2017</small>
                      </p>
                    </li>
                    <li className="user-body">
                      <div className="row">
                        <div className="col-xs-4 text-center">
                          <a href="#">Seguidores</a>
                        </div>
                        <div className="col-xs-4 text-center">
                          <a href="#">Vendas</a>
                        </div>
                        <div className="col-xs-4 text-center">
                          <a href="#">Amigos</a>
                        </div>
                      </div>
                    </li>
                    <li className="user-footer">
                      <div className="pull-left">
                        <Link to="/home/profile" className="btn btn-default btn-flat">
                          Perfil
                        </Link>
                      </div>
                      <div className="pull-right">
                        <button className="btn btn-default btn-flat" onClick={this.handleLogout}>Sair</button>
                      </div>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>

          </nav>
        </aside>
      </div>
    );
  }
}

Header = connect()(Header);

export default withRouter(Header);