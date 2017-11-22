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
import permissions from 'router/Permissions';

const MontarMenuLeft = (props) => {
	if (!props.userType || props.permissions.search(props.userType) === -1)
		return false;
	
		if (props.routes && props.label) {
		return (
			<li className="treeview">
				<a href="">
					<i className={'fa ' + props.icon}></i> <span>{props.label}</span>
					<span className='pull-right-container'>
						<i className='fa fa-angle-left pull-right'></i>
					</span>
				</a>
				<ul className="treeview-menu">
					{props.routes.map((route, i) => (
						<MontarMenuLeft key={i} {...route} userType={props.userType} />
					))}
				</ul>
			</li>
		);
	} else if (props.label) {
		return (
			<li>
				<Link to={props.path}>
					<i className={'fa ' + props.icon}></i> <span>{props.label}</span>
				</Link>
			</li>
		);
	} else {
		return false;
	}
};

class MenuLeft extends Component {

	render() {
		return (
			<div>
				<ul className="sidebar-menu">
					{permissions.map((opcao, i) => (
						<MontarMenuLeft key={i} {...opcao} userType={this.props.user && this.props.user.userType} />
					))}
				</ul>
			</div>
		);
	}
}

export default MenuLeft;
