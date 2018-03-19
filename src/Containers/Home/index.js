import React, { Component } from "react";
import './index.css';
import Faces from "../../Components/Faces";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <div className="mainSection">
                <Faces />
            </div>
         )
    }
}
 
export default Home;