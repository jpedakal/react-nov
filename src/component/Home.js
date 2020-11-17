import React, { Component } from 'react';
import Header from './Header';
import JSON from '../db.json';
import NewsDisply from './NewsDisplay';

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
                <NewsDisply datalist={this.state.news}/>
            </div>
        )
    }
}

export default Home;
