import React from "react";
import './index.css';

const Details = (props) => {
    return (
        <div className="detailsPanel">
        <h1>{props.data.name}</h1>
            <p>{props.data.desc}</p>
        </div>
    )
}
 
export default Details;