import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './router/AppRouter';
import { initApplication } from './store/actions/session'

import './css/styles.scss';

const store = configureStore();
const state = store.getState();

store.dispatch(initApplication());
window.store = store;

const pageController = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(pageController, document.getElementById('root'));