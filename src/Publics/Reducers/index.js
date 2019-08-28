import { combineReducers } from 'redux'

import books from './book'
import genres from './genre'
import years from './year'

const reducers = combineReducers ({
    books,
    genres,
    years
});

export default reducers;