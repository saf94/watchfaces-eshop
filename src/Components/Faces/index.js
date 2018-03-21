import React from "react";
import './index.css';

const Faces = (props) => {
    return (
        <div className="facesPanel">
            <span onClick={props.scrollUp}><img src={props.upArrow} /></span>
            <img src={props.data.img}/> 
            <span onClick={props.scrollDown}><img src={props.downArrow} /></span>
        </div>
    )
}
 
export default Faces;
