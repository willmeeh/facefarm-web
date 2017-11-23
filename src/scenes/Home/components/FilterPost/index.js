import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class FilterPost extends Component {
	render() {
		return (
			<div className="box box-default collapsed-box">
				<div className="box-header with-border">
					<h3 className="box-title"><i className="fa fa-filter mright-10" ></i>Filtros</h3>

					<div className="box-tools pull-right">
						<button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-plus"></i>
						</button>
					</div>
				</div>
				<div className="box-body display-none">
					<div className="row">
						<div className="col-md-12">
							<div className="col-md-6">
								<div className="form-group">
									De
                                <div className="input-group">
										<div className="input-group-addon">
											<i className="fa fa-calendar"></i>
										</div>
										<input type="text" className="form-control pull-right" id="reservation" />
									</div>
								</div>
							</div>
							<div className="col-md-6">
								Até
                            <div className="input-group">
									<div className="input-group-addon">
										<i className="fa fa-calendar"></i>
									</div>
									<input type="text" className="form-control pull-right" id="reservation" />
								</div>
							</div>
						</div>
						<div className="col-md-12">

							<div className="col-md-12">
								<div className="form-group">
									<label>Cultura(s)</label>
									<select multiple="" className="form-control">
										<option>Arroz</option>
										<option>Soja</option>
										<option>Feijão</option>
										<option>Milho</option>
										<option>Algodão</option>
									</select>
								</div>
							</div>

							<div className="col-md-6">
								<div className="checkbox">
									<label className="f-size-1-5-em">
										<input type="checkbox" value="" checked="" />
										<span className="cr"><i className="cr-icon fa fa-check"></i></span>
										Compra
                                </label>
								</div>
								<div className="checkbox">
									<label className="f-size-1-5-em">
										<input type="checkbox" value="" checked="" />
										<span className="cr"><i className="cr-icon fa fa-check"></i></span>
										Venda
                                </label>
								</div>
								<div className="checkbox">
									<label className="f-size-1-5-em">
										<input type="checkbox" value="" checked="" />
										<span className="cr"><i className="cr-icon fa fa-check"></i></span>
										Publicações
                                </label>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>Palavra chave</label>
									<input type="text" className="form-control" placeholder="" />
								</div>
							</div>
						</div>
						<div className="col-md-12">

							<a href="" className="btn btn-success pull-right">
								Buscar
                        </a>
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

export default FilterPost;



