import React from 'react';
import logo from './logo.svg';  
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-body">
        <div className="Logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="Login-box">
          <div className="Headline">
            Login
          </div>
          <div className="Input-box">
            <input type="text"></input>
            <input type="text"></input>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
