import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import  Promiser from 'redux-promise-middleware'

import reducers from './Reducers/index'

const logger = createLogger()

const store = createStore(
    reducers,
    applyMiddleware(logger, Promiser)
)

export default store