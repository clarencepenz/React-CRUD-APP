import React, { Component } from 'react'
import { connect} from 'react-redux'
import { createFeed } from './actions/FeedAction'

class FormFeed extends Component {
    state = {
        title: '',
        body: ''
    }

    onChange =(e)=>{
        this.setState({[e.target.name]: e.target.value})
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
                <input
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                    placeholder="title"
                />
                <textarea
                    name="body"
                    onChange={this.onChange}
                    value={this.state.body}
                    placeholder="body"
                />
                    <button type="submit">Post</button>
            </form>
        )
    }
}


export default  connect(null, {createFeed})(FormFeed)