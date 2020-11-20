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

    filteredNews(keyword){
        const output= this.state.news.filter(data=>{
            return data.title.indexOf(keyword)>-1
        })
        this.setState({filtered:output})
    }

    render() {
        return (
            <div>
                <Header userText={(userInput)=> {this.filteredNews(userInput)}}/>
                <hr />
                <NewsDisplay datalist={this.state.news}/>
            </div>
        )
    }
}

export default Home;
