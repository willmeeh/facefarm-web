import { createStore, combineReducers } from 'redux';
import sessionReducer from './session/reducer';

export default () => {
  const store = createStore(
    combineReducers({
      session: sessionReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
