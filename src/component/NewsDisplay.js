import React from 'react';
import LazyLoad from 'react-lazyload';

const NewsDisplay = (props) => {

    const renderList = props.datalist.map((data) => {
        return (
            <LazyLoad height={200} throttle={1000}>
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.feed}</p>
                    <img src={data.imageUrl} alt="figure" />
                </div>
            </LazyLoad>

        )
    })

    return (
        <React.Fragment>
            {renderList}
        </React.Fragment>
    )
}

export default NewsDisplay;
