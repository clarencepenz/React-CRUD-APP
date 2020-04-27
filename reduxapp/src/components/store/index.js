import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'react-thunk'
import { allReducer} from '../reducers'

const initialState = {}

const middleware = [thunk]

export const store = createStore(
    allReducer, 
    initialState, 
    compose (
        applyMiddleware(...middleware), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))