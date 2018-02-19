import React, { Component } from "react";
import './index.css';
import Navbar from "../../Components/Navbar";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <div className="mainSection">
                <Navbar />
            </div>
         )
    }
}
 
export default Home;