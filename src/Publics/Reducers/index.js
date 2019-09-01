import { combineReducers } from 'redux'

import books from './book'
import genres from './genre'
import users from './user'
import transactions from './transaction'

const reducers = combineReducers ({
    books,
    genres,
    users,
    transactions
});

export default reducers;