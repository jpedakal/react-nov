import React, { Component } from 'react';
import Header from './Header';
import JSON from '../db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {

    constructor() {
        super()

        this.state = {
            news: JSON
        }
    }

    render() {
        return (
            <div>
                <Header />
                <hr />
                <NewsDisplay datalist={this.state.news}/>
            </div>
        )
    }
}

export default Home;
