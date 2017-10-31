import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './router/AppRouter';

import './css/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();
// const state = store.getState();
// console.log(state);

const pageController = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(pageController, document.getElementById('root'));