import { combineReducers } from 'redux'

import books from './book'
import genres from './genre'
import users from './user'

const reducers = combineReducers ({
    books,
    genres,
    users
});

export default reducers;