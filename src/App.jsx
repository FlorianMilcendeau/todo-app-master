import React from 'react';
import { Provider } from 'react-redux';
import TodoListStore from './redux/store/TodoListStore';

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <TodoListStore />
    </Provider>
  );
}

export default App;
