import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import About from '../components/screens/About';
// import HomePage from '../components/screens/HomePage';
import Logout from '../components/screens/Logout'
import Currency from '../components/screens/users/Currency'
import WeatherForecast from '../components/screens/users/WeatherForecast'
import CommodityCurrency from '../components/screens/users/CommodityCurrency'
import NotFound from '../components/screens/NotFound'

export default [{ 
        path: '/home/weather',
        label: 'Previsão do tempo',
        icon: 'fa-sun-o',
        component: WeatherForecast,
        permissions: 'agricultor empresa'
    },{ 
        path: '/home/cotacoes',
        label: 'Cotações',
        icon: 'fa-money',
        component: <span></span>,
        permissions: 'agricultor empresa',
        routes: [
            { 
                path: '/home/cotacoes/commodityCurrency',
                label: 'Agrícola',
                icon: 'fa-leaf',
                component: CommodityCurrency,
                permissions: 'agricultor empresa'
            },
            { 
                path: '/home/cotacoes/currency',
                label: 'Monetária',
                icon: 'fa-money',
                component: Currency,
                permissions: 'agricultor empresa'
            }
        ]
    },{ 
        path: '/home/logout',
        component: Logout,
        permissions: 'agricultor empresa'
    },{ 
        path: '/home/about',
        component: About,
        permissions: 'agricultor empresa'
    }
  ];