import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import './styles.scss';

class Profile extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-3">

					<div className="box box-success">
						<div className="box-body box-profile">
							<img className="profile-user-img img-responsive img-circle" src="../../resources/images/user_image.png" alt="User profile picture" />

							<h3 className="profile-username text-center">Fulano de tal</h3>

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
					<div className="nav-tabs-custom">
						<ul className="nav nav-tabs">
							<li className=""><a data-target="#postagens" href="#profile" data-toggle="tab" aria-expanded="false">Postagens</a></li>
							<a href="" className="btn btn-primary pull-right mtop-5">
								<i className="fa fa-plus mright-10"></i>Seguir
                    </a>
						</ul>
						<div className="tab-content">
							<div className="tab-pane active" id="postagens">
								<div className="nav-tabs-custom">
									<ul className="nav nav-tabs pull-right">
										<li className="dropdown">
											<a aria-expanded="false" className="dropdown-toggle" data-toggle="dropdown" href="#profile">
												<i className="fa fa-chevron-down"></i>
											</a>
											<ul className="dropdown-menu mleft-114">
												<li role="presentation"><a role="menuitem" tabindex="-1" href="#profile">Remover post<i className="text-red pull-left mtop-3 fa fa-close"></i></a></li>
												<li role="presentation"><a role="menuitem" tabindex="-1" href="#profile">Editar Post<i className="text-blue mtop-3 pull-left fa fa-edit"></i></a></li>
												<li role="presentation" className="divider"></li>
												<li role="presentation"><a role="menuitem" tabindex="-1" href="#profile">Favoritar<i className="text-yellow mtop-3 pull-left fa fa-star-o"></i></a></li>
											</ul>
										</li>
										<li className="pull-left header headeer">
											<div className="row">
												<div className="col-xs-1 .w80px" >
													<img  className="header-img" src="../../resources/images/user_image.png" alt="User Image" />
												</div>	
												<div className="col-xs-6 pull-left" >
													<div className="row" >
														<a href="#profile">
															<span className="username"  >Fulano de Tal</span>
														</a>
													</div>
													<div className="row mtop-less-17" >
														<span >Anunciou venda de grãos - 5 dias atrás</span>
													</div>
												</div>
											</div>
										</li>
									</ul>
									<div className="tab-content">
										<div className="post mtop-10">
											<div className="row mbottom-10">
												<div className="col-md-12">

													<span className="pull-left"><label>Categoria:</label> Arroz</span>
													<span className="pull-right"><i  className="fa fa-globe"></i>Público</span>
												</div>
											</div>
											<div className="row mbottom-10">
												<div className="col-md-12">
													<h2>
														Compro arroz
                                            </h2>
													<hr />

													<div className="row">
														<div className="col-md-4">
															<span className="pull-left">Valor: </span><span className="pull-right">R$ 40,00 </span><br />
															<span className="pull-left">Quantidade: </span><span className="pull-right">Saca 50Kgs </span>
														</div>
														<div className="col-md-4">
														</div>
														<div className="col-md-4">
															<span className="pull-right">Cidade: Santa Cruz do sul</span>
														</div>
													</div>




												</div>
											</div>
											<div className="row margin-bottom">
												<div className="col-md-12">
													<div className="row">
														<img className="img-responsive" src="http://www.mda.gov.br/sitemda/sites/sitemda/files/imagem_destaque/Outra%20op%C3%A7%C3%A3o%20-%20%20Foto%20mat%C3%A9ria%20Pati%20-%20Cootap.jpg" />
													</div>
												</div>
											</div>

											<ul className="list-inline">
												<li><a href="#profile" className="link-black text-sm"><i className="fa fa-share margin-r-5"></i> Compartilhar</a></li>
												<li><a href="#profile" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5"></i> Curtir</a>
												</li>
												<li className="pull-right">
													<a href="#profile" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5"></i> Comentários</a></li>
											</ul>

											<input className="form-control input-sm" type="text" placeholder="Digite um comentário" />
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane" id="timeline">

							</div>
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

export default Profile;
