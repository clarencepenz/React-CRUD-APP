import React, { Component } from 'react'
import { fetchFeed, deleteFeed } from './actions/FeedAction'
import { connect } from 'react-redux'



class Feed extends Component {

    componentDidMount(){
        this.props.fetchFeed()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const feed = this.props.feeds.map(feed =>(
            <div key={feed.id}>
               <h3>{feed.title}</h3> 
                <p>{feed.body}</p>
                <button onClick={()=> this.props.deleteFeed(feed.pid)}>x</button>
                
            </div>
        ))
        return (
            <div>
                {feed}
            </div>
        )
    }
}

const mapStateToProps = state=> ({
        feeds: state.feeds.feeds,
        newPost: state.feeds.feed
})


export default connect(mapStateToProps, { fetchFeed, deleteFeed })(Feed)
