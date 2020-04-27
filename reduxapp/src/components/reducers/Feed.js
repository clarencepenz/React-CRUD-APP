import { FETCH_FEED } from '../actions/action-type'

const initialState = {
    feeds: [],
    feed: {}
}


export const feedReducer =(state = initialState, action)=>{
    switch(action.type){
        case FETCH_FEED:
            return {
                ...state,
                feeds: action.payload
            }
            default:
                return state
    }
}