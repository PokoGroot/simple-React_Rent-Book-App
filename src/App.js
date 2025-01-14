import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'
import DetailBook from './pages/detail-book/detail-book'
import store from './Publics/Store'

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
    <Router>

        <Switch>
          <Route
            path={'/'}
            exact={true}
            render={() => {
              return window.localStorage.getItem("token") !== null ? 
              <Redirect to="./home"/>
              :
              <Redirect to="./login"/>;
            }}
          />
          <Route path={'/home'} 
            render={({history}) => {
            return (<Home history={history} />)
          }} /> 
          <Route path={'/login'}
            component={Login} 
          />
          <Route path={'/register'}
            component={Register}
            />
          <Route path={'/detail_book/:id'}
            component={DetailBook} 
          />
          <Redirect to="/" />
        </Switch>
      
    </Router>
    </Provider>
  );
}

export default App;
