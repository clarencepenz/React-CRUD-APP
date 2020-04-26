import React from 'react';
import {Provider } from 'react-redux'
import {store } from './components/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       Redux App
      </div>
    </Provider>
    
  );
}

export default App;
