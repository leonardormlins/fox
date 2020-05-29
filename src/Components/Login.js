import React, { useState, useContext } from 'react';
import StoreContext from './Store/Context';
import { useHistory } from 'react-router-dom';
import logo from './Styles/logo.svg';  
import './Styles/Login.css';

function initialState() {
  return {user: '', password: ''}
}

function login({username, password}) {
  if ( username === 'admin' && password === 'admin' )  {
    return {token: 'qsdfasdfasdasdqwerqw'}
  } 
  return { error: 'Usuário ou senha inválido(s)' }
}

const Login = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();
  
  function onChange(event) {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  function onSubmit() {
    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push('/');
    }

    setError(error);
    setValues(initialState);
  }

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
            <input type="text" name="username" placeholder="Username" 
              value={values.username} onChange={onChange}></input>
            <input type="password" name="password" placeholder="Password"
              value={values.password} onChange={onChange}></input>
              {error}
          </div>
          <div className="Remember">
            <input type="checkbox"/>
            <span>Remember me</span>
          </div>
          <div className="Login-button" onClick={onSubmit}>
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
