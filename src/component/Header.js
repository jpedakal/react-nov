import React, { Component, Fragment } from 'react';
import "./Header.css";

class Header extends Component {

    constructor() {
        super()

        this.state = {
            title: "React App",
        }
    }

    inputChange(event) {
       this.setState({keyword: event.target.value ? event.target.value : "Search"})
       this.props.userText(event.target.value)
    }

    render() {
        const data = this.state;
        return (
            <Fragment>
                <header>
                    <p className="logo">{data.title}</p>
                    <center>
                        <input onChange={this.inputChange.bind(this)} />
                        <p>{this.state.keyword}</p>
                    </center>
                </header>
            </Fragment>
        )
    }
}

export default Header
