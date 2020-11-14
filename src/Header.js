import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super()

        this.state={
            title: "React App"
        }
    }
    render() {
        const data= this.state;
        return (
            <div>
                <p>{data.title}</p>
            </div >
        )
    }
}



export default Header
