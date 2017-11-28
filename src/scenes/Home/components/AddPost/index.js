import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import * as addPostApi from 'scenes/Home/components/AddPost/api';
import * as sessionSelectors from 'services/session/selectors';

class AddPost extends Component {
	state = {
		collapse: true,
		texto: '',
		preco: '',
		quantidadeTotal: 0,
		quantidadeMedida: 0,
		unidadeMedida: '',
		tipo: 'publicacao'
	}

	handleCollapse = () => {
		this.setState({
			collapse: !this.state.collapse
		});
	}
	handleChangeTipo = (event) => { this.setState({ tipo: event.target.value }) };
	handleChangeTexto = (event) => { this.setState({ texto: event.target.value }); }
	handleChangePreco = (event) => { this.setState({ preco: event.target.value }); }
	handleChangeQuantidadeTotal = (event) => { this.setState({ quantidadeTotal: event.target.value }); }
	handleChangeQuantidadeMedida = (event) => { this.setState({ quantidadeMedida: event.target.value }); }
	handleChangeUnidadeMedida = (event) => { this.setState({ unidadeMedida: event.target.value }); }

	handlePublicar = () => {
		addPostApi.create({
			...this.state,
			idUsuario: sessionSelectors.getLoggedUserId()
		}).then((r) => {
			if (this.props.refreshTimeLine) {
				this.props.refreshTimeLine();
			}
		})
	}

	componentDidMount() {
		if (this.props.boxCollapseState !== undefined && !this.props.boxCollapseState) {
			this.setState({ collapse: false });
		}
	}

	render() {
		return (
			<div className="box box-default">
				<div className="box-header with-border">
					<h3 className="box-title"><i className="fa fa-plus mright-10"></i>Publicar</h3>
					<div className="box-tools pull-right">
						<button type="button" onClick={this.handleCollapse} className="btn btn-box-tool"><i className={this.state.collapse ? 'fa fa-minus' : 'fa fa-plus'}></i>
						</button>
					</div>
				</div>
				<div className={this.state.collapse ? 'box-body' : 'box-body display-none '}>
					<div className="row">
						<div className="col-md-12">
							<div className="row">
								<div className="col-md-4">
									<div className="checkbox">
										<label className="f-size-1-0-em">
											<input
												type="checkbox"
												value="publicacao"
												onChange={this.handleChangeTipo}
												checked={this.state.tipo === 'publicacao' ? true : false}
											/>
											<span className="cr"><i className="cr-icon fa fa-check"></i></span>
											Publicação
										</label>
									</div>
								</div>
								<div className="col-md-4">
									<div className="checkbox">
										<label className="f-size-1-0-em" >
											<input
												type="checkbox"
												value="compra"
												onChange={this.handleChangeTipo}
												checked={this.state.tipo === 'compra' ? true : false}
											/>
											<span className="cr"><i className="cr-icon fa fa-check"></i></span>
											Compra
										</label>
									</div>
								</div>
								<div className="col-md-4">
									<div className="checkbox">
										<label className="f-size-1-0-em">
											<input
												type="checkbox"
												value="venda"
												onChange={this.handleChangeTipo}
												checked={this.state.tipo === 'venda' ? true : false}
											/>
											<span className="cr"><i className="cr-icon fa fa-check"></i></span>
											Venda
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className={this.state.tipo !== 'publicacao' ? '' : 'display-none'}>
							<div className="col-md-6">
								<div className="form-group">
									<label>Cultura</label>
									<select className="form-control">
										<option>Arroz</option>
										<option>Soja</option>
									</select>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>Quantidade total</label>
									<input
										type="text"
										className="form-control"
										placeholder="0,00"
										value={this.state.quantidadeTotal}
										onChange={this.handleChangeQuantidadeTotal}
									/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
									<label>Quantidade por medida</label>
									<input
										type="text"
										className="form-control"
										placeholder="0,00"
										value={this.state.quantidadeMedida}
										onChange={this.handleChangeQuantidadeMedida}
									/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
									<label>Unidade de medida</label>
									<input
										type="text"
										className="form-control"
										placeholder="0,00"
										value={this.state.unidadeMedida}
										onChange={this.handleChangeUnidadeMedida}
									/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
									<label>Preco</label>
									<input
										type="text"
										className="form-control"
										placeholder="0,00"
										value={this.state.preco}
										onChange={this.handleChangePreco}
									/>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<textarea
								className="form-control"
								rows="4"
								id="comment"
								placeholder="Descricao da postagem"
								value={this.state.texto}
								onChange={this.handleChangeTexto}
							>
							</textarea>
						</div>
						<div className="col-md-12 mtop-10" >
							<a href="" className="btn btn-success">
								Adicionar fotos
							</a>
							<button
								className="btn btn-success pull-right"
								onClick={this.handlePublicar}
								disabled={(this.state.tipo === 'publicacao' && !this.state.texto ? true : false)}
							>
								Publicar
							</button>
						</div>
					</div>
					<div className="row">

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

export default AddPost;
