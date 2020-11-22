import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import FilterTodoStore from './redux/store/FilterTodoStore';
import InputAddStore from './redux/store/InputAddStore';
import TodoListStore from './redux/store/TodoListStore';

function App() {
  return (
    <Provider store={store}>
      <FilterTodoStore />
      <InputAddStore />
      <TodoListStore />
    </Provider>
  );
}

export default App;
