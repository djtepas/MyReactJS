import React, { Component } from 'react'
import PostData from '../data/posts.json'


class App extends Component {
    constructor (props) {
        super(props)
        this.titleWasClicked = this.titleWasClicked.bind(this)
    }
    
    titleWasClicked (event) {
        event.preventDefault()
        const {dataCallback} = this.props
        if (dataCallback !== undefined) {
            dataCallback("Hello world!")
        }
        
    }
    render () {
        const {post} = this.props
        return (
            <div>
                <h1 onClick={this.titleWasClicked}>{post.title}</h1>
                <p>{post.content}</p>
            </div>
            
        )
    }
}

export default App;
