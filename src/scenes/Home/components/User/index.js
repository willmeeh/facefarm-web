import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import * as sessionSelectors from 'services/session/selectors';
import defaultUserImg from 'scenes/images/user_image.png'

class Post extends Component {

	render() {
		return (
			<div className="box box-solid">
				<div className="box-body">
					<div className="post">
						<div className="user-block margin-none">
							<img className="width-50 heigth-50" src={defaultUserImg} alt="user image" />
							<span className="username">
								{console.log(this.props)}
								<a href="#">{this.props.nomeCompleto}</a>
								<button className="btn btn-success pull-right mright-5">
									Seguir
								</button>
								<button className="btn btn-danger pull-right mright-5">
									Deixar de seguir
								</button>
								<button className="btn btn-primary pull-right mright-5">
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
		user: state.session.user
	}
};

export default Post;
