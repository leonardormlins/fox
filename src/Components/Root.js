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

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path='/login' component={Login}/>
        <RoutesPrivate path='/profile' component={Profile}/>
        <RoutesPrivate path='/search' component={Search}/>
        <RoutesPrivate path='/' component={Home}/>
      </Switch>  
    </StoreProvider>
  </Router>
);

export default PagesRoot;