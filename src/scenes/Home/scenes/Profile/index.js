import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import './styles.scss';

import AddPost from 'scenes/Home/components/AddPost/index';
import Posts from 'scenes/Home/components/Posts/index';
import ChangeImageProfile from 'scenes/Home/scenes/Profile/components/ChangeImageProfile/index';

import defaultUserImg from 'scenes/images/user_image.png'

import * as sessionSelectors from 'services/session/selectors';
import * as userApi from 'services/user/api'
import apiConfig from 'services/api/config';
import * as profileApi from 'scenes/Home/scenes/Profile/api';
import {
	popularListFollowing,
	popularListFollowers
} from 'services/session/actions';

class Profile extends Component {

	state = {
		user: {},
		isChangintImgProfile: false,
		profileImage: defaultUserImg
	}

	refreshTimeLine = () => {
		this.forceUpdate();
	}

	componentDidMount() {
		setTimeout(() => {
			this.getProfile();
		}, 0)
	}

	componentWillReceiveProps() {
		setTimeout(() => {
			this.getProfile();
		}, 0)
	}

	getProfile = () => {
		const userId = `/${this.props.match.params.userId}`
		profileApi.getUserById(userId)
			.then((r) => {
				if (r['agricultor']) {
					this.setState({ user: r['agricultor'] })
				} else if (r['empresa']) {
					this.setState({ user: r['empresa'] })
				}
				this.refreshTimeLine();
				this.setProfileImage();
			}).catch((e) => {

			});
	}

	handleSeguirClick = () => {
		userApi.seguirUsuario({ id: this.state.user._id }).then((r) => {
			userApi.getListFollowing().then((r) => {
				store.dispatch(popularListFollowing(r.listFollowing));
			});
		}).catch((e) => {
			console.log('e', e)
		});
	}

	handleDeixarDeSeguirClick = () => {
		userApi.deixarDeSeguirUsuario({ id: this.state.user._id }).then((r) => {
			userApi.getListFollowing().then((r) => {
				store.dispatch(popularListFollowing(r.listFollowing));
			});
		}).catch((e) => {
			console.log('e', e)
		});
	}

	isCurrentLoggedUser = () => {
		return this.props.session.user._id === this.state.user._id ? true : false
	}

	checkIsFollowing = () => {

		var isFollowing = false;
		if (this.props.session.listFollowing) {
			this.props.session.listFollowing.forEach((item) => {
				if (item._id === this.state.user._id) {
					isFollowing = true;
				}
			});
		}
		return isFollowing;
	}

	handleProfileImageClick = () => {
		if (this.props.session.user._id === this.state.user._id) {
			this.setState({ isChangintImgProfile: true })
		}
	}

	closeProfileImageChangeModal = () => {
		this.setState({ isChangintImgProfile: false })
	}

	setProfileImage = () => {
		if (this.state.user && this.state.user.imagemPerfil) {
			this.setState({ profileImage: `${apiConfig.url}${this.state.user.imagemPerfil}` })
		} else {
			this.setState({ profileImage: defaultUserImg })
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-3">

					<ChangeImageProfile handleClose={this.closeProfileImageChangeModal} user={this.props.session.user} isChangintImgProfile={this.state.isChangintImgProfile} />

					<div className="box box-success">
						<div className="box-body box-profile">
							<img onClick={this.handleProfileImageClick} className="img-thumbnail profile-image" src={this.state.profileImage} alt="User profile picture" />

							<h3 className="profile-username text-center">{this.state.user.nomeCompleto}</h3>

							<p className="text-muted text-center">Plantador de arroz</p>

							<ul className="list-group list-group-unbordered">
								<li className="list-group-item">
									<b>Seguidores</b> <a className="pull-right">{this.props.session.listFollowers && this.props.session.listFollowers.length}</a>
								</li>
								<li className="list-group-item">
									<b>Seguindo</b> <a className="pull-right">{this.props.session.listFollowing && this.props.session.listFollowing.length}</a>
								</li>
							</ul>
							<div className={this.isCurrentLoggedUser() ? 'display-none' : ''}>
								<button
									className={this.checkIsFollowing() ? 'display-none' : 'btn btn-success width-100-por-cento'}
									onClick={this.handleSeguirClick}
								>
									Seguir
								</button>
								<button
									className={this.checkIsFollowing() ? 'btn btn-danger width-100-por-cento' : 'display-none'}
									onClick={this.handleDeixarDeSeguirClick}
								>
									Deixar de seguir
								</button>
							</div>
						</div>
					</div>

					<div className="box box-success">
						<div className="box-header with-border">
							<h3 className="box-title">Sobre mim</h3>
							<a className="pull-right" href="#profile" data-toggle="tooltip" title="Editar" data-placement="top">
								<i className="fa fa-edit"></i>
							</a>
						</div>
						<div className="box-body">
							<strong><i className="fa fa-book margin-r-5"></i> Educação</strong>

							<p className="text-muted">
								Bacharel em Engenharia Agrícola - Universidade tal
                    </p>

							<hr />

							<strong><i className="fa fa-map-marker margin-r-5"></i> Localização</strong>

							<p className="text-muted">Cerro Branco, RS</p>

							<hr />
						</div>
					</div>
					<div className="box box-success">
						<div className="box-header with-border">
							<h3 className="box-title">Culturas</h3>
							<a className="pull-right" href="#profile" data-toggle="tooltip" title="Editar" data-placement="top">
								<i className="fa fa-edit"></i>
							</a>
						</div>
						<div className="box-body">
							<strong><i className="fa fa-book margin-r-5"></i> Grãos</strong>

							<p className="text-muted">
								Arroz
                    </p>
							<p className="text-muted">
								Soja
                    </p>

							<hr />>

										<strong><i className="fa fa-book margin-r-5"></i> Carnes</strong>

							<p className="text-muted">
								Bovino
                    </p>
						</div>
					</div>
				</div>
				<div className="col-md-9">
					{this.state.user._id === this.props.session.user._id &&
						<AddPost
							refreshTimeLine={this.refreshTimeLine}
						/>
					}
					<Posts usersIds={[this.state.user._id]} refreshTimeLine={this.refreshTimeLine} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		session: state.session
	}
};

export default withRouter(connect(mapStateToProps)(Profile));
