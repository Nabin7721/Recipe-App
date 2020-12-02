import React, { Component } from 'react'

export class Home_img extends Component {
    render() {
        return (
            <div>
                <div>
                <img 
                className='recipe-img'
                alt='recipe-img'
                src='https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'></img>
                </div>
                <div className='web-text'>
                    <p className='title'>   Recipe list when you  wanted it</p>
                    <p className='text'>Scroll down to see your recipe search</p>
                </div>
            </div>
            
        )
    }
}

export default Home_img
