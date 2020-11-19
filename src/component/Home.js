import React, { Component } from 'react';
import Header from './Header';
import JSON from '../db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {

    constructor() {
        super()

        this.state = {
            news: JSON,
            filtered: JSON
        }
    }

    filteredNews(){
        const output= this.state.news.filter(data=>{
            return data.title.indexOf(keyword)>-1
        })
        this.setState({filtered:output})
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
