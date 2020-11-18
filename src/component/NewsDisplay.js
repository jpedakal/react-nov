import React from 'react';

const NewsDisplay = (props) => {
    
    const renderList = props.datalist.map((data) => {
        return (
            <div>
                <h2>{data.title}</h2>
                <p>{data.feed}</p>
                <img src={data.imageUrl} alt="figure" />
            </div>
        )
    })

    return (
        <React.Fragment>
            {renderList}
        </React.Fragment>
    )
}

export default NewsDisplay;
