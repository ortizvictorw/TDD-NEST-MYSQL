import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo my-3" alt="logo" />
        <Login />
      </header>
    </div>
  );
}

export default App;
