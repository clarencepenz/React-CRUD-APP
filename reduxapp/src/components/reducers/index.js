import { combineReducers } from 'redux'
import { feedReducer } from './Feed'

export const rootReducer = combineReducers({
    feed: feedReducer
})