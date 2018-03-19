import React, { Component } from "react";
import './index.css';
const img1 = 'images/img1.png';


class Faces extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div> <img src={img1} /> </div>
         )
    }
}
 
export default Faces;