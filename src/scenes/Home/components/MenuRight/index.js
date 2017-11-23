import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class MenuRight extends Component {
	render() {
		return (
			<div className="box box-solid min-height-500">

				<div className="box box-success">
					<div className="box-header with-border text-center" >
						<h3 className="box-title">Santa Cruz do Sul, RS</h3>
					</div>
					<div className="box-body">
						<div className="row">
							<div className="col-md-12 text-center" >
								<span className="f-size-5vw" >27°</span>

								<i className="f-size-5vw" className="wi wi-day-sunny"></i>
							</div>
						</div>
					</div>
				</div>

				<div className="box box-primary">
					<div className="box-header with-border text-center" >
						<h3 className="box-title">Cotação de preços</h3>
					</div>
					<div className="box-body">
						<div className="row">
							<div className="col-md-12 text-center" >
								<table className="table">
									<tbody className="text-right">
										<tr>
											<th className="text-left">Moeda</th>
											<th className="text-right">Preço</th>
										</tr>
										<tr>
											<td className="text-left">Dólar Comercial</td>
											<td>3,1727</td>
										</tr>
										<tr>
											<td className="text-left">Euro</td>
											<td>3,4634</td>
										</tr>
										<tr>
											<td className="text-left">Libra</td>
											<td>4,1009</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="box box-warning">
					<div className="box-header with-border text-center">
						<h3 className="box-title">Commodities</h3>
					</div>
					<div className="box-body">
						<div className="row">
							<div className="col-md-12 text-center" >
								<table className="table">
									<tbody className="text-right">
										<tr>
											<th className="text-left">Cultura</th>
											<th className="text-left">Qtde</th>
											<th className="text-right">Preço</th>
										</tr>
										<tr>
											<td className="text-left">Arroz</td>
											<td className="text-left">60kg</td>
											<td>41,50</td>
										</tr>
										<tr>
											<td className="text-left">Soja</td>
											<td className="text-left">60kg</td>
											<td>59,02</td>
										</tr>
									</tbody>
								</table>
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

export default MenuRight;
