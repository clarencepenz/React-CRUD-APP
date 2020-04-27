import { combineReducers } from 'redux'
import { feedReducer } from './Feed'

export const allReducer = combineReducers({
    feeds: feedReducer
})