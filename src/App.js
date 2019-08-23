import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'
import DetailBook from './pages/detail-book/detail-book'
import Explore from './pages/explore/explore'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path={'/'} component={Home} /> 
          <Route path={'/login'} component={Login} />
          <Route path={'/register'} component={Register} />
          <Route path={'/detail_book/:id'} component={DetailBook} />
          <Route path={'/explore'} component={Explore} />
          <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
