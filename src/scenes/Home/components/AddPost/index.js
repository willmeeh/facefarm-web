import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

var SimpleCurrencyInput = require('react-simple-currency');

import * as addPostApi from 'scenes/Home/components/AddPost/api';
import * as sessionSelectors from 'services/session/selectors';

class AddPost extends Component {
	state = {
		collapse: true,
		texto: '',
		preco: 0,
		quantidadeTotal: 1,
		quantidadeMedida: 1,
		unidadeMedida: 'kg',
		cultura: 'Abacate',
		tipo: 'publicacao'
	}

	handleCollapse = () => {
		this.setState({
			collapse: !this.state.collapse
		});
	}
	handleChangeTipo = (event) => { this.setState({ tipo: event.target.value }) };
	handleChangeCultura = (event) => { this.setState({ cultura: event.target.value }) };
	handleChangeTexto = (event) => { this.setState({ texto: event.target.value }); }
	handleChangePreco = (event) => { this.setState({ preco: event }); }
	handleChangeQuantidadeTotal = (event) => { this.setState({ quantidadeTotal: event.target.value }); }
	handleChangeQuantidadeMedida = (event) => { this.setState({ quantidadeMedida: event.target.value }); }
	handleChangeUnidadeMedida = (event) => {
		this.setState({ unidadeMedida: event.target.value });
	}

	handlePublicar = () => {
		addPostApi.create({
			...this.state,
			idUsuario: sessionSelectors.getLoggedUserId()
		}).then((r) => {
			if (this.props.refreshTimeLine) {
				this.props.refreshTimeLine();

				this.setState({
					collapse: !this.state.collapse
				});
				this.setState({ texto: '' })
				this.setState({ preco: 0 })
				this.setState({ quantidadeTotal: 1 })
				this.setState({ quantidadeMedida: 1 })
				this.setState({ tipo: 'publicacao' })

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
									<label>Cultura:</label>
									<select className="form-control" 
										onChange={this.handleChangeCultura}
									>
										<option value="Abacate">Abacate</option>
										<option value="Açúcar">Açúcar</option>
										<option value="Algodão">Algodão</option>
										<option value="Alho">Alho</option>
										<option value="Amendoim">Amendoim</option>
										<option value="Arroz">Arroz</option>
										<option value="Aveia">Aveia</option>
										<option value="Aves">Aves</option>
										<option value="Azevém">Azevém</option>
										<option value="Banana">Banana</option>
										<option value="Batata">Batata</option>
										<option value="Beterraba">Beterraba</option>
										<option value="Bovinos">Bovinos</option>
										<option value="Bubalinos">Bubalinos</option>
										<option value="Cacau">Cacau</option>
										<option value="Café">Café</option>
										<option value="Cana">Cana-de-açúcar</option>
										<option value="Canola">Canola</option>
										<option value="Caprinos">Caprinos</option>
										<option value="Caqui">Caqui</option>
										<option value="Cebola">Cebola</option>
										<option value="Cenoura">Cenoura</option>
										<option value="Cevada">Cevada</option>
										<option value="Chuchu">Chuchu</option>
										<option value="Couve">Couve</option>
										<option value="Dendê">Dendê</option>
										<option value="Erva-mate">Erva-mate</option>
										<option value="Farelo de soja">Farelo de soja</option>
										<option value="Farinha de mandioca">Farinha de mandioca</option>
										<option value="Feijão">Feijão</option>
										<option value="Girassol">Girassol</option>
										<option value="Goiaba">Goiaba</option>
										<option value="Laranja">Laranja</option>
										<option value="Leite">Leite</option>
										<option value="Lima">Lima</option>
										<option value="Maçã">Maçã</option>
										<option value="Mamão">Mamão</option>
										<option value="Mandioca">Mandioca</option>
										<option value="Manga">Manga</option>
										<option value="Maracujá">Maracujá</option>
										<option value="Melancia">Melancia</option>
										<option value="Melão">Melão</option>
										<option value="Milho">Milho</option>
										<option value="Morango">Morango</option>
										<option value="Ovinos">Ovinos</option>
										<option value="Ovos">Ovos</option>
										<option value="Pepino">Pepino</option>
										<option value="Soja">Soja</option>
										<option value="Sorgo">Sorgo</option>
										<option value="Suínos">Suínos</option>
										<option value="Tangerina">Tangerina</option>
										<option value="Tomate">Tomate</option>
										<option value="Trigo">Trigo</option>
										<option value="Triguilho">Triguilho</option>
										<option value="Triticale">Triticale</option>
										<option value="Uva">Uva</option>
									</select>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>Quantidade total:</label>
									<input
										type="number"
										className="form-control"
										placeholder="0.00"
										min="0"
										value={this.state.quantidadeTotal}
										onChange={this.handleChangeQuantidadeTotal}
									/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
									<label>Quantidade por medida:</label>
									<input
										type="number"
										className="form-control"
										placeholder="0.00"
										min="1"
										value={this.state.quantidadeMedida}
										onChange={this.handleChangeQuantidadeMedida}
									/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
									<label>Unidade de medida:</label>

									<select
										className="form-control"
										placeholder="0,00"
										value={this.state.unidadeMedida}
										onChange={this.handleChangeUnidadeMedida}
									>
										<option value="miligrama">miligrama(s)</option>
										<option value="centigrama">centigrama(s)</option>
										<option value="decigrama">decigrama(s)</option>
										<option value="grama">grama(s)</option>
										<option value="decagrama">decagrama(s)</option>
										<option value="hectograma">hectograma(s)</option>
										<option value="quilograma">quilograma(s)</option>
										<option value="quilate">quilate(s)</option>
										<option value="arroba">arroba(s)</option>
										<option value="tonelada">tonelada(s)</option>
										<option value="libra">libra(s)</option>
										<option value="onca">onça(s)</option>
										<option value="saca">saca(s)</option>
										<option value="arroba">arroba(s)</option>
										<option value="fardo">fardo(s)</option>
										<option value="bushel">bushel(s)</option>
										<option value="alqueire">alqueire(s)</option>
									</select>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
									<label>Preco:</label>
									<SimpleCurrencyInput
										className="form-control"
										value={this.state.preco}
										precision={2}
										separator=','
										delimiter='.'
										unit='R$'
										onInputChange={this.handleChangePreco}
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
