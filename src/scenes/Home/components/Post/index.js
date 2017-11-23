import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class Post extends Component {
    render() {
        return (
            <div>
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
                                        <img className="header-img" src="../../resources/images/user_image.png" alt="User Image" />
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
                                        <span className="pull-right"><i className="fa fa-globe"></i>Público</span>
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
