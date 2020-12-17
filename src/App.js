import React, { Component } from 'react'
import PostList from './posts/PostList'
import './App.css'
import Images from "./components/Images"

class App extends Component{
    render () {
        return (
            <div className='App'>
                {/* <Images /> */}
                <PostList />
            </div>
        )
    }
}

export default App
