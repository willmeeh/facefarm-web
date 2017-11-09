import React, { Component } from 'react';
import {
    Redirect,
    Route,
    Switch,
    withRouter,
    BrowserRouter,
    Link
  } from 'react-router-dom';
import { connect } from 'react-redux'
import permissions from '../../router/Permissions'


// variavel utilizada somente para ilustracao
const currentUserPermission = 'agricultor';

const MontarMenuLeft = (route) => {
    if (route.permissions && route.permissions.search(currentUserPermission) === -1) {
        return null;
    }

    if (route.routes && route.label) {
        return (
            <li className="treeview">
                <a href="">
                    <i className={'fa ' + route.icon}></i> <span>{route.label}</span>
                    <span className='pull-right-container'>
                        <i className='fa fa-angle-left pull-right'></i>
                    </span>
                </a>
                <ul className="treeview-menu">
                    {route.routes.map((route, i) => (
                        <MontarMenuLeft key={i} {...route}/>
                    ))}
                </ul>
            </li>
        );
    } else if (route.label) {
        return (
            <li>
                <Link to={route.path}>
                    <i className={'fa ' + route.icon}></i> <span>{route.label}</span>
                </Link>
            </li>
        );
    } else {
        return (<span></span>);
    }
  };

class MenuLeft extends Component {
  render() {
    return (
      <div>
        <ul className="sidebar-menu">
          {permissions.map((opcao, i) => (
            <MontarMenuLeft key={i} {...opcao}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(connect()(MenuLeft));
