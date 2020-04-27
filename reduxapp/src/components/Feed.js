import React, { Component } from 'react'
import { fetchFeed } from './actions/FeedAction'
import { connect } from 'react-redux'



class Feed extends Component {

    componentDidMount(){
        this.props.fetchFeed()
    }

    render() {
        const feed = this.props.feeds.map(feed =>(
            <div key={feed.id}>
               <h3>{feed.title}</h3> 
                <p>{feed.body}</p>
                
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
        feeds: state.feeds.feeds
})


export default connect(mapStateToProps, { fetchFeed})(Feed)
