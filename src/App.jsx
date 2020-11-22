import React from 'react';
import { store } from './redux/index';

function App() {
  store.subscribe(() => console.log(store.getState()));

  return <div className="App">Hello World</div>;
}

export default App;
