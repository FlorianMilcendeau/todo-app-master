import { createStore, combineReducers } from 'redux';
import { filterReducer } from '../filterReducer';
import { todoReducer } from '../TodoReducer';

export default createStore(
  combineReducers({ todos: todoReducer, filter: filterReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
