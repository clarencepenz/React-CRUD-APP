import React, { Component } from 'react'
import { connect} from 'react-redux'
import { createFeed } from './actions/FeedAction'

class FormFeed extends Component {
    state = {
        title: '',
        body: ''
    }

    onSubmit =(e)=>{
        e.preventDefault()
        const feed = {
            title: this.state.title,
            body: this.state.bodytitle
        }
        this.props.createFeed(feed)
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>

            </form>
        )
    }
}


export default  connect(null, {createFeed})(FormFeed)