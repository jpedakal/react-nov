import React, { Component } from 'react';
import "./Header.css"


class Header extends Component {
    constructor() {
        super()

        this.state = {
            title: "React App"
        }
    }
    render() {
        const data = this.state;
        return (
            <React.Fragment>
            <header>
                <p className="logo">{data.title}</p>
                <center>
                    <input />
                </center>
                </header>
            </React.Fragment>
        )
    }
}

export default Header
