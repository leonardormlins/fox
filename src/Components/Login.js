import React from 'react';
import logo from './Styles/logo.svg';  
import './Styles/Login.css';

function Login() {
  return (
    <div className="App">
      <header className="Header">
        <div className="Logo">
          <img src={logo} alt="logo"/>
        </div>
      </header>
      <div className="App-body">
        <div className="Login-box">
          <div className="Headline">
            <span>Login</span>
          </div>
          <div className="Input-box">
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
          </div>
          <div className="Remember">
            <input type="checkbox"/>
            <span>Remember me</span>
          </div>
          <div className="Login-button">
            <span>Enter</span>
          </div>
          <div className="Login-button brow">
            <span>Create account</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
