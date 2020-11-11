import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

const App = () => {
    return (
        <div>
            <Header />
            <hr />
            <h1>This is React Page</h1>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));