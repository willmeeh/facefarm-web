import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';

import Search from 'scenes/Home/components/Header/components/Search/index';
import * as sessionSelectors from 'services/session/selectors';
import * as sessionActions from 'services/session/actions';
import apiConfig from 'services/api/config';
import defaultUserImg from 'scenes/images/user_image.png'

class Header extends Component {

  state = {
		profileImage: defaultUserImg
	}

  handleLogout = () => {
    this.props.dispatch(sessionActions.resetApplication());
    this.props.history.push('/login');
  }

  componentDidMount() {
    this.setProfileImage();  
  }

  componentWillReceiveProps() {
    this.setProfileImage();  
  }

  setProfileImage = () => {
		if (this.props.user && this.props.user.imagemPerfil) {
			this.setState({ profileImage: `${apiConfig.url}${this.props.user.imagemPerfil}` })
		} else {
			this.setState({ profileImage: defaultUserImg })
		}
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
                    <img src={this.state.profileImage} className="user-image" alt="User Image" />
                    <span className="hidden-xs">
                      {this.props.user && this.props.user.nomeCompleto}
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="user-header">
                      <img src={this.state.profileImage} className="img-circle" alt="User Image" />

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
                        <Link to={`/home/profile/${sessionSelectors.getLoggedUserId()}`} className="btn btn-default btn-flat">
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

const mapStateToProps = (state, teste) => {
	return {
		user: state.session.user,
	}
};

export default withRouter(connect(mapStateToProps)(Header));
