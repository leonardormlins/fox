import React, { useState, useContext } from 'react';
import StoreContext from './Store/Context';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import logo from './Styles/logo.svg';  
import './Styles/Login.css';
import axios from 'axios';

function initialState() {
  return {username: '', password: ''}
}

const Login = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken, setUsername } = useContext(StoreContext);
  const history = useHistory();
  
  function onChange(event) {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  async function onSubmit() {
    axios.post('user/login', 
    {
      "name": values.username,
      "password": values.password 
    }).then( resp => {
      console.log(resp)
      const username = values.username;
      const token = resp.data.token;

      if (token) {
        setToken(token);
        setUsername(username)
        return history.push('/');
      }
    } )
    .catch( error => {
      setError(error);
      setValues(initialState);
      console.log('Login error: ', error);
    })
     
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
              {error ? <p>User or password incorrect</p> : null}
          </div>
          <div className="Remember">
            <input type="checkbox"/>
            <span>Remember me</span>
          </div>
          <div className="Login-button" onClick={onSubmit}>
            <span>Enter</span>
          </div>
          <Link to='/register' className="Login-button brow">
            <span>Create account</span>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Login;
