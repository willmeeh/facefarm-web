import React from 'react';
import {
	Redirect,
	Route,
	Switch,
	Link
} from 'react-router-dom';

import About from 'scenes/About/index';
import NotFound from 'scenes/NotFound/index';

import Currency from 'scenes/Home/scenes/Currency/index';
import WeatherForecast from 'scenes/Home/scenes/Weather/index';
import Commodities from 'scenes/Home/scenes/Commodities/index';
import Profile from 'scenes/Home/scenes/Profile/index';
import TimeLine from 'scenes/Home/scenes/TimeLine/index';

import { requireAuthentication } from 'components/AuthenticatedComponent/index';

export default [{
	path: '/home',
	component: requireAuthentication(TimeLine),
	permissions: 'agricultor empresa',
	exact: true
}, {
	path: '/home/weather',
	label: 'Previsão do tempo',
	icon: 'fa-sun-o',
	component: requireAuthentication(WeatherForecast),
	permissions: 'agricultor empresa'
}, {
	path: '/home/cotacoes',
	label: 'Cotações',
	icon: 'fa-money',
	component: undefined,
	permissions: 'agricultor empresa',
	routes: [
		{
			path: '/home/cotacoes/commodities',
			label: 'Commodities',
			icon: 'fa-leaf',
			component: requireAuthentication(Commodities),
			permissions: 'agricultor empresa'
		},
		{
			path: '/home/cotacoes/currency',
			label: 'Monetária',
			icon: 'fa-money',
			component: requireAuthentication(Currency),
			permissions: 'agricultor empresa'
		}
	]
}, {
	path: '/home/about',
	component: About,
	permissions: 'agricultor empresa'
}, {
	path: '/home/profile',
	component: Profile,
	permissions: 'agricultor empresa'
}
];