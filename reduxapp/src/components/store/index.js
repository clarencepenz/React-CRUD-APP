import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'react-thunk'
import { rootReducer} from '../reducers'

const initialStore = {}

const middleware = [ thunk ]

export const store = createStore(rootReducer, initialStore, compose(applyMiddleware(...middleware)))