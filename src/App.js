import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'
import DetailBook from './pages/detail-book/detail-book'
import Explore from './pages/explore/explore'
import store from './Publics/Store'

import './App.css';



const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
            <Route exact path={'/'} component={Home} /> 
            <Route path={'/login'} component={Login} />
            <Route path={'/register'} component={Register} />
            <Route path={'/detail_book/:id'} component={DetailBook} />
            <Route path={'/explore'} component={Explore} />
            <Redirect to="/" />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
