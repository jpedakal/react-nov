import React, { Component, Fragment } from 'react';
import "./Header.css";

class Header extends Component {

    constructor() {
        super()

        this.state = {
            title: "React App"
        }
    }

    inputChange(event){
        console.log(event.target.value)
    }

    render() {
        const data = this.state;
        return (
            <Fragment>
            <header>
                <p className="logo">{data.title}</p>
                <center>
                    <input onChange={this.inputChange} />
                </center>
                </header>
            </Fragment>
        )
    }
}

export default Header
