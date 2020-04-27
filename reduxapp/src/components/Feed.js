import React, { Component } from 'react'
import { fetchFeed } from './actions/FeedAction'
import { connect } from 'react-redux'



class Feed extends Component {

    componentWillMount(){
        this.props.fetchFeed()
    }

    render() {
        const feed = this.props.feeds.map(feed =>(
            <div key={feed.id}>
                {feed.title}
                {feed.body}
                
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
