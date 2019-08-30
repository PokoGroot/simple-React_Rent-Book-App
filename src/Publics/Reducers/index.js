import { combineReducers } from 'redux'

import books from './book'
import genres from './genre'
import years from './year'
import users from './user'

const reducers = combineReducers ({
    books,
    genres,
    years,
    users
});

export default reducers;