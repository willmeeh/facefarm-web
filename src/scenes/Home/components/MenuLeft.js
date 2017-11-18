import React, { Component } from 'react';
import {
    Redirect,
    Route,
    Switch,
    withRouter,
    BrowserRouter,
    Link
  } from 'react-router-dom';
import { connect } from 'react-redux';
import permissions from '../../../router/Permissions';


const MontarMenuLeft = (route) => {
    if (!route.userType && route.permissions.search(route.userType) === -1) {
        return false;
    }

    console.log('MontarMenuLeft');

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
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    componentWillReceiveProps(nextProps) {
        
    }

  render() {
    return (
      <div>
        <ul className="sidebar-menu">
          {permissions.map((opcao, i) => (
            <MontarMenuLeft key={i} {...opcao} userType={this.props.user && this.props.user.userType ? this.props.user.userType : false}/>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, teste) => {
    return {
        user: state.session.user
    }
};

export default withRouter(connect(mapStateToProps,null,
    null,
    {
     shouldComponentUpdate: false
    })(MenuLeft));
