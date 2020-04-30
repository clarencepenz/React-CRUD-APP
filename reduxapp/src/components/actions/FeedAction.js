import { FETCH_FEED, DELETE_FEED, NEW_FEED} from './action-type'

export const fetchFeed =()=> dispatch =>{
    fetch('http://localhost:3000/api/v1/articles')
    .then(res => res.json())
    .then(feeds => dispatch({
        type: FETCH_FEED,
        payload: feeds
    }))
}

export const deleteFeed =(pid)=> dispatch =>{
    fetch(`http://localhost:3000/api/v1/articles/${pid}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(feed => dispatch({
        type: DELETE_FEED,
        payload: feed
    }))
}

export const createFeed = data => dispatch =>{
    fetch('http://localhost:3000/api/v1/articles', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res.json())
    .then(feed => dispatch({
        type: NEW_FEED,
        payload: feed
    }))
}