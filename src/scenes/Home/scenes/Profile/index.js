import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import './styles.scss';

import AddPost from 'scenes/Home/components/AddPost/index';
import Posts from 'scenes/Home/components/Posts/index';
import * as profileApi from 'scenes/Home/scenes/Profile/api'

class Profile extends Component {

	state = {
		user: {}
	}

	refreshTimeLine = () => {
		this.forceUpdate();
	}

	componentDidMount() {
		this.getProfile();	
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
			}).catch((e) => {

			});
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-3">

					<div className="box box-success">
						<div className="box-body box-profile">
							<img className="profile-user-img img-responsive img-circle" src="../../resources/images/user_image.png" alt="User profile picture" />

							<h3 className="profile-username text-center">{this.state.user.nomeCompleto}</h3>

							<p className="text-muted text-center">Plantador de arroz</p>

							<ul className="list-group list-group-unbordered">
								<li className="list-group-item">
									<b>Seguidores</b> <a className="pull-right">1,322</a>
								</li>
								<li className="list-group-item">
									<b>Seguindo</b> <a className="pull-right">543</a>
								</li>
							</ul>
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
					<AddPost refreshTimeLine={this.refreshTimeLine} />
					<Posts usersIds={{ usersIds: [this.state.user._id] }} refreshTimeLine={this.refreshTimeLine} />
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
