import { FETCH_FEED, DELETE_FEED, NEW_FEED } from '../actions/action-type'

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
        case DELETE_FEED:
            const pid = action.payload.pid
            return{
                ...state,
                feeds: state.feeds.filter(feed => feed.pid !== pid)
            }
        case NEW_FEED:
            return {
                ...state,
                feed: action.payload
            }
            default:
                return state
    }
}