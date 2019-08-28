import { combineReducers } from 'redux'

import books from './books'
import genres from './genre'
import years from './year'

const reducers = combineReducers ({
    books,
    genres,
    years
});

export default reducers;