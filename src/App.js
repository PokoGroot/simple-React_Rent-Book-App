import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'
import DetailBook from './pages/detail-book/detail-book'
import GenreBook from './pages/genre-book/genre-book'
import Explore from './pages/explore/explore'
import store from './Publics/Store'

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
    <Router>

        <Switch>
          <Route path={'/'} 
            exact 
            render={({history}) => {
            return <Home history={history} />
          }} /> 
          <Route path={'/login'} component={Login} />
          <Route path={'/register'} component={Register} />
          <Route path={'/detail_book/:id'} component={DetailBook} />
          <Route path={'/explore'} component={Explore} />
          <Route path={'/genre/:id'} 
            component={GenreBook}
            // render={(props)=>{
            //   return <GenreBook {...props} />
            // }}
          />
          <Route path={'/year/:id'} component={GenreBook} />
          <Redirect to="/" />
        </Switch>
      
    </Router>
    </Provider>
  );
}

export default App;
