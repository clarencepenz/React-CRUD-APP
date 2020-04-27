import { FETCH_FEED } from './action-type'

export const fetchFeed =()=> dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(feeds => dispatch({
        type: FETCH_FEED,
        payload: feeds
    }))
}