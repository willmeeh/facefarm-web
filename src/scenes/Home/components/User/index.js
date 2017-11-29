import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import {
	popularListFollowing,
	popularListFollowers
} from 'services/session/actions';

import * as userApi from 'services/user/api'
import apiConfig from 'services/api/config';
import defaultUserImg from 'scenes/images/user_image.png'

class Post extends Component {

	state = {
		profileImage: defaultUserImg
	}

	componentDidMount() {
		this.setProfileImage();
	}

	componentWillReceiveProps() {
		this.setProfileImage();
	}

	handlePerfilClick = () => {
		this.props.history.push(`/home/profile/${this.props._id}`);
	}

	handleUserNameClick = () => {
		this.props.history.push(`/home/profile/${this.props._id}`);
	}

	handleSeguirClick = () => {
		userApi.seguirUsuario({ id: this.props._id }).then((r) => {
			userApi.getListFollowing().then((r) => {
				store.dispatch(popularListFollowing(r.listFollowing));
			});
		}).catch((e) => {
			console.log('e', e)
		});
	}

	handleDeixarDeSeguirClick = () => {
		userApi.deixarDeSeguirUsuario({ id: this.props._id }).then((r) => {
			userApi.getListFollowing().then((r) => {
				store.dispatch(popularListFollowing(r.listFollowing));
			});
		}).catch((e) => {
			console.log('e', e)
		});
	}

	checkIsFollowing = () => {
		var isFollowing = false;
		if (this.props.listFollowing) {
			this.props.listFollowing.forEach((item) => {
				if (this.props._id === item._id) {
					isFollowing = true;
				}
			});
		}
		return isFollowing;
	}

	setProfileImage = () => {
		if (this.props && this.props.imagemPerfil) {
			this.setState({ profileImage: `${apiConfig.url}${this.props.imagemPerfil}` })
		} else {
			this.setState({ profileImage: defaultUserImg })
		}
	}

	render() {
		return (
			<div className="box box-solid">
				<div className="box-body">
					<div className="post">
						<div className="user-block margin-none">
							<img className="width-50 heigth-50" src={this.state.profileImage} alt="user image" />
							<span className="username">
								<a href="#" onClick={this.handleUserNameClick}>{this.props.nomeCompleto}</a>
								<button
									className={this.checkIsFollowing() ? 'display-none' : 'btn btn-success pull-right mright-5'}
									onClick={this.handleSeguirClick}
								>
									Seguir
								</button>
								<button
									className={this.checkIsFollowing() ? 'btn btn-danger pull-right mright-5' : 'display-none'}
									onClick={this.handleDeixarDeSeguirClick}
								>
									Deixar de seguir
								</button>
								<button
									className="btn btn-primary pull-right mright-5"
									onClick={this.handlePerfilClick}
								>
									Perfil
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

const mapStateToProps = (state, teste) => {
	return {
		listFollowing: state.session.listFollowing,
		listFollowers: state.session.listFollowers,
	}
};

export default withRouter(connect(mapStateToProps)(Post));
