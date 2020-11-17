import React, { Component, Fragment } from 'react';
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
            <Fragment>
            <header>
                <p className="logo">{data.title}</p>
                <center>
                    <input />
                </center>
                </header>
            </Fragment>
        )
    }
}

export default Header
