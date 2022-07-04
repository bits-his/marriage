import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const createStoreWithMiddleware = process.env.NODE_ENV === 'development' ? applyMiddleware(thunk, logger)(createStore) : applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleware(rootReducer)

export default store