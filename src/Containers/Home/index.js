import React, { Component } from "react";
import './index.css';
import Faces from "../../Components/Faces";
import Details from "../../Components/Details";

const images =  {
    img1: 'images/img1.png',
    img2: 'images/img2.png'
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <div className="mainSection">
                <Details />
                <Faces img1={images.img1}/>
            </div>
         )
    }
}
 
export default Home;