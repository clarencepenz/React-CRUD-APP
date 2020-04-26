import React, { Component } from 'react'
import { fetchFeed } from './actions/FeedAction'
import { connect } from 'react-redux'



class Feed extends Component {

    componentWillMount(){
        this.props.fetchFeed()
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps =(state)=> ({
        feed: state.feed.feed
})


export default connect(mapStateToProps, { fetchFeed})(Feed)
