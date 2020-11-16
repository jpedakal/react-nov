import React, { Component } from 'react';
import Header from './Header';
import JSON from '../db.json'

class Home extends Component {
    
    constructor(){
        super()

        this.state={
            news: JSON
        }
    }

    render() {
        return (
            <div>
                <Header />
                <hr />
                <h1>This is React Page</h1>
            </div>
        )
    }
}

export default Home;