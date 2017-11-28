import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './services/configureStore';
import AppRouter from './router/AppRouter';
import * as sessionApi from 'services/session/api'
import { 
  initApplication, 
  popularListFollowing,  
  popularListFollowers
} from './services/session/actions';

import 'normalize.css/normalize.css';
import './css/styles.scss';

const store = configureStore();
const state = store.getState();

store.dispatch(initApplication());
window.store = store;

class App extends Component {

  componentDidMount() {
    sessionApi.getListFollowing().then((r) => {
      store.dispatch(popularListFollowing(r.listFollowing));
    });
    sessionApi.popularListFollowers().then((r) => {
      store.dispatch(popularListFollowers(r.listFollowing));
    });
  }

  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
