import { createStore, combineReducers } from 'redux';
import { todoReducer } from '../TodoReducer';

export default createStore(
  combineReducers({ todos: todoReducer, filter: (state = 0) => state }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
