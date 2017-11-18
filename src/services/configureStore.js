import { createStore, combineReducers } from 'redux';
import sessionReducer from './session/reducer';
import messageReducer from './message/reducer';

export default () => {
  const store = createStore(
    combineReducers({
      session: sessionReducer,
      message: messageReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
