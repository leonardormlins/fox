import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from './Store/Provider';
import RoutesPrivate from './Routes/Private/Private';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Search from './Search';
import Register from './Register';
import People from './People';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081/api'

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <RoutesPrivate path='/people' component={People}/>
        <RoutesPrivate path='/profile' component={Profile}/>
        <RoutesPrivate path='/search' component={Search}/>
        <RoutesPrivate path='/' component={Home}/>
      </Switch>  
    </StoreProvider>
  </Router>
);

export default PagesRoot;