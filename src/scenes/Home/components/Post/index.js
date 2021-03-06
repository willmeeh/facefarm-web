import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import moment from 'moment';
import locale_br from "moment/locale/pt-br";

import * as sessionSelectors from 'services/session/selectors';
import * as postApi from 'scenes/Home/components/Post/api'
import * as userApi from 'services/user/api'
import * as comentarioApi from './components/Comments/api'
import apiConfig from 'services/api/config';
import defaultUserImg from 'scenes/images/user_image.png'

import './styles.scss'

class Post extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    profileImage: defaultUserImg,
    isFechingPictureProfile: false,
    texto: ''
  }

  handleKeyPress = (e) => {
    this.setState({ texto: e.target.value })
  }

  handleKeyPressEnter = (e) => {
    if (e.key === 'Enter') {
      var comentario = {
        from: this.props._id,
        idUsuario: this.props.user._id,
        texto: this.state.texto
      }
      this.props.comentarios.push({ texto: this.state.texto });

      comentarioApi.create(comentario)
        .then((result) => {
          console.log(result)

          this.setState({ texto: '' })
          var texto = this.refs.texto;
          texto.value = "";
        })
    } else {
      this.setState({ texto: e.target.value })
    }
  }



  componentDidMount() {
    moment.updateLocale("pt-br", locale_br);
    this.setProfileImage();
  }

  componentWillReceiveProps() {
    this.setProfileImage();
  }

  handleRemovePost = () => {
    let fn = this.props.refreshTimeLine();
    postApi.remove(this.props._id).then((r) => {
      if (this.props.refreshTimeLine) {
        this.props.refreshTimeLine();
      }
    })
  }

  handleUpdatePost = () => {
    let fn = this.props.refreshTimeLine();
    let update = {
      _id: this.props._id,
      texto: this.props.texto,
      curtidas: this.props.curtidas,
      data: this.props.data,
      preco: this.props.preco,
      quantidadeTotal: this.props.quantidadeTotal,
      quantidadeMedida: this.props.quantidadeMedida,
      unidadeMedida: this.props.unidadeMedida,
      listaComentario: this.props.listaComentario,
      listaCultura: this.props.listaCultura,
      listaImagen: this.props.listaImagen,
      cultura: this.props.cultura,
      finalizado: true
    }
    postApi.update(update).then((r) => {
      if (this.props.refreshTimeLine) {
        this.props.refreshTimeLine();
      }
    })
  }

  handleUserNameClicked = (e) => {
    e.preventDefault()
    let id;
    if (this.props['agricultor']) {
      id = this.props['agricultor']._id;
    } else if (this.props['empresa']) {
      id = this.props['empresa']._id;
    }
    this.props.history.push(`/home/profile/${id}`);
  }

  setProfileImage = () => {
    if (this.state.isFechingPictureProfile)
      return;
    this.setState({ isFechingPictureProfile: true })
    let user;
    if (this.props.agricultor) {
      user = this.props.agricultor;
    } else if (this.props.empresa) {
      user = this.props.empresa;
    }
    if (user && user.imagemPerfil) {
      this.setState({ profileImage: `${apiConfig.url}${user.imagemPerfil}` })
    } else {
      this.setState({ profileImage: defaultUserImg })
    }
  }



  render() {
    return (
      <div className={(this.props.finalizado === 'true') ? "nav-tabs-custom post-finalizado" : "nav-tabs-custom"}>
        <ul className="nav nav-tabs pull-right">
          <li className="dropdown">
            <a aria-expanded="false" className="dropdown-toggle" data-toggle="dropdown" href="">
              <i className="fa fa-chevron-down"></i>
            </a>
            <ul className="dropdown-menu mleft-less-114">
              {
                (
                  (this.props.agricultor && this.props.agricultor._id === sessionSelectors.getLoggedUserId())
                  ||
                  (this.props.empresa && this.props.empresa._id === sessionSelectors.getLoggedUserId())
                ) ? [
                    <li key="0" role="presentation" onClick={this.handleRemovePost}><a role="menuitem" tabIndex="-1" href="#">Remover post<i className="text-red mtop-3 pull-left fa fa-close"></i></a></li>,
                    <li key="4" role="presentation" onClick={this.handleUpdatePost}><a role="menuitem" tabIndex="-1" href="#">Finalizar<i className="text-red mtop-3 pull-left fa fa-close"></i></a></li>,
                    <li key="1" role="presentation"><a role="menuitem" tabIndex="-1" href="#">Editar Post<i className="text-blue mtop-3 pull-left fa fa-edit"></i></a></li>,
                    <li key="2" role="presentation" className="divider"></li>,
                    <li key="3" role="presentation"><a role="menuitem" tabIndex="-1" href="#">Favoritar<i className="text-yellow mtop-3 pull-left fa fa-star-o"></i></a></li>
                  ] :
                  <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Denunciar post<i className="mtop-3" className="text-yellow pull-left fa fa-ban"></i></a></li>
              }
            </ul>
          </li>
          <li className="pull-left header min-width-80-por-cento mtop-5 mbottom-5" >

            <div className="row">
              <div className="col-xs-1 width-70" >
                <img className="width-50 heigth-50" src={this.state.profileImage} alt="User Image" />
              </div>
              <div className="col-xs-6 pull-left" >
                <div className="row" >
                  <a href="">
                    <span
                      className="username font-user-name"
                      onClick={this.handleUserNameClicked}
                    >
                      {
                        (this.props.agricultor && this.props.agricultor.nomeCompleto)
                        ||
                        (this.props.empresa && this.props.empresa.nomeCompleto)
                      }
                    </span>
                  </a>
                </div>
                <div className="row mtop-less-17">
                  <span className="post-notification">
                    {
                      moment().diff(this.props.data, 'mounth') > moment.duration(1, 'days')
                        ? moment(this.props.data).calendar()
                        : moment(this.props.data).fromNow()
                    }
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className="tab-content">
          <div className="post">
            <h1>{this.props.tipo.replace(/\b\w/g, a => a.toUpperCase())}</h1>
            {(this.props.finalizado === 'true') ?
              <h2><strong>Finalizado</strong></h2>
              : ""
            }
            <div className={this.props.tipo === 'compra' || this.props.tipo === 'venda' ? '' : 'display-none'}>
              {/* {this.props.tipo === 'compra' || this.props.tipo === 'venda' ? console.log('this.propsthis.propsthis.propsthis.propsthis.props', this.props) : ''} */}
              <div className="row">
                <div className="col-md-12">
                  <span className="pull-left"><label>Categoria:</label> {this.props.cultura}</span>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <h4>
                    {this.props.texto}
                  </h4>
                  <div className="row">
                    <div className="col-md-4">
                      <span className="pull-left">Quantidade total: </span><span className="pull-right">{this.props.quantidadeTotal}</span><br />
                      <span className="pull-left">Medida: </span><span className="pull-right">{this.props.quantidadeMedida} {this.props.unidadeMedida} </span><br />
                      <span className="pull-left">Valor: </span><span className="pull-right">R$ {this.props.preco},00 </span>
                    </div>
                    <div className="col-md-4">
                    </div>
                    {/* <div className="col-md-4">
                      <span className="pull-right">Cidade: Santa Cruz do sul</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <p>{this.props.texto}</p>
            {/* <div className="row margin-bottom">
              <div className="col-sm-6">
                <img className="img-responsive" src="../resources/images/image_templates/Agricultura.jpg" alt="Photo" />
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-6">
                    <img className="img-responsive" src="../resources/images/image_templates/Agricultura-no-Sudeste-do-Brasil-16.jpg" alt="Photo" />
                    <br />
                    <img className="img-responsive" src="../resources/images/image_templates/Agricultura.jpg" alt="Photo" />
                  </div>
                  <div className="col-sm-6">
                    <img className="img-responsive" src="../resources/images/image_templates/Agropro-Perspectivas-para-a-agricultura-em-2017.png" alt="Photo" />
                    <br />
                    <img className="img-responsive" src="../resources/images/image_templates/Dia-agricultura-água-panta.jpg" alt="Photo" />
                  </div>
                </div>
              </div>
            </div> */}

            <ul className="list-inline">
              <li><a href="#" className="link-black text-sm"><i className="fa fa-share margin-r-5"></i> Compartilhar</a></li>
              <li><a href="#" className="link-black text-sm"><i className="fa fa-thumbs-o-up margin-r-5"></i> Curtir</a>
              </li>
              <li className="pull-right">
                <a href="#" className="link-black text-sm"><i className="fa fa-comments-o margin-r-5"></i> Comentários</a></li>
            </ul>


            <input className="form-control input-sm disabled" ref="texto" onKeyUp={this.handleKeyPressEnter} type="text" placeholder="Digite um comentário" disabled={this.props.finalizado === 'true'} />



          </div>


          {this.props.comentarios.map((comentario, index) => (
            <div key={index} className="direct-chat-msg">
              <div className="direct-chat-info clearfix">
                {/* <span className="direct-chat-name pull-left">Alexander Pierce</span> */}
                {/* <span className="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span> */}
              </div>
              <div className="direct-chat-text">
                {comentario.texto}
              </div>
            </div>
          ))}




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

export default withRouter(connect(mapStateToProps)(Post));
