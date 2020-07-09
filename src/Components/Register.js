import React, { useState, useContext } from 'react';
import StoreContext from './Store/Context';
import { useHistory } from 'react-router-dom';
import logo from './Styles/logo.svg';  
import './Styles/Login.css';
import axios from 'axios';

function initialState() {
  return {username: '', password: '', repeatPassword: ''}
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

  async function onSubmit() {
    if (!(values.password === values.repeatPassword)) return console.log('senhas diferentes')
    console.log('senhas conferem');
    axios.post('user/register', 
    {
      "name": values.username,
      "password": values.password 
    }).then( resp => {
      console.log(resp)
      const token = resp.data.token
      const error = null 

      if (token) {
        setToken(token);
        return history.push('/');
      }
  
      setError(error);
      setValues(initialState);
    } )
    .catch( error => console.log('Login error: ', error))
    
    
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
            <span>Register</span>
          </div>
          <div className="Input-box">
            <input type="text" name="username" placeholder="Username" 
              value={values.username} onChange={onChange}></input>
            <input type="password" name="password" placeholder="Password"
              value={values.password} onChange={onChange}></input>
            <input type="password" name="repeatPassword" placeholder="Repeat Password"
              value={values.repeatPassword} onChange={onChange}></input>
              {error}
          </div>

          <div className="Login-button" onClick={onSubmit}>
            <span>Register</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
