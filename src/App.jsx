import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import FilterTodoStore from './redux/store/FilterTodoStore';
import InputAddStore from './redux/store/InputAddStore';
import TodoListStore from './redux/store/TodoListStore';

import styles from './css/App.module.css';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <h1>Todo</h1>
        <FilterTodoStore />
        <InputAddStore />
        <TodoListStore />
      </div>
    </Provider>
  );
}

export default App;
