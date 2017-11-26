import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';

import 'scenes/Home/components/Header/components/Search/styles.scss';

class Header extends Component {

	state = {
		searchParam: ''
	}

	handleSearch = (e) => {
		e.preventDefault();
		this.props.history.push(`/home/searchResult/${e.target.elements.searchParam.value}`);
	}

	handleChangeSearch = (e) => {
		this.setState({ searchParam: e.target.value})
	}

	render() {
		return (
			<form 
				className="sidebar-form navbar-form navbar-left search-custom"
				onSubmit={this.handleSearch}
			>
				<div className="input-group">
					<input 
						type="text"
						name="searchParam"
						className="form-control" 
						placeholder="Buscar usuários" 
						onChange={this.handleChangeSearch}
					/>
					<span className="input-group-btn">
						<button 
							type="submit" 
							className="btn btn-flat"
							disabled={this.state.searchParam === ''}
						>
							<i className="fa fa-search"></i>
						</button>
					</span>
				</div>
			</form>
		);
	}
}

Header = connect()(Header);

export default withRouter(Header);