import React, { Component } from 'react';

export default class MenuLeft extends Component {
    render() {
        return (
            <div>
                <ul className="sidebar-menu">
                    <li>
                        <a href="#weatherForecast">
                            <i className="fa fa-sun-o"></i> <span>Previsão do tempo</span>
                        </a>
                    </li>

                    <li className="treeview">
                        <a href="">
                            <i className="fa fa-money"></i> <span>Cotações</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="#priceListAgricultural"><i className="fa fa-leaf"></i> Agrícola</a></li>
                            <li><a href="#priceListMonetary"><i className="fa fa-money"></i> Monetária</a></li>
                        </ul>
                    </li>
                    <li className="treeview">
                        <a href="">
                            <i className="fa fa-cog"></i> <span>Configurações</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="#rightPanelConfig"><i className="fa fa-th"></i><span>Painel lateral direito</span></a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#anuncio_empresa">
                            <i className="fa fa-bullhorn"></i> <span>Anúncios</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}