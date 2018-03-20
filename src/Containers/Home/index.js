import React, { Component } from "react";
import './index.css';
import Faces from "../../Components/Faces";
import Details from "../../Components/Details";

const images = [
    { img: 'images/img1.png', desc: "this watch is etc etc" },
    { img: 'images/img2.png', desc: "this watch is etc etc" }
]

const icons = {
    upArrow: "up-arrow.png",
    downArrow: "down-arrow.png"
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageCount: 0,
            currentImage: ""
        }
    }

    componentDidMount() {
        this.setState(function (prevState, props) {
            return {
                currentImage: images[prevState.currentImageCount].img
            }
        })
    }

    scrollUp() {
        if (this.state.currentImageCount > 0) {
            this.setState(function (prevState, props) {
                let count = prevState.currentImageCount - 1
                return {
                    currentImageCount: count,
                    currentImage: images[count].img
                }
            })
        }
    }

    scrollDown() {
        if (this.state.currentImageCount < images.length) {
            this.setState(function (prevState, props) {
                let count = prevState.currentImageCount + 1
                return {
                    currentImageCount: count,
                    currentImage: images[count].img
                }
            })
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className="mainSection">
                <Details />
                <Faces img={this.state.currentImage} upArrow={icons.upArrow} downArrow={icons.downArrow} scrollUp={() => this.scrollUp()} scrollDown={() => this.scrollDown()} />
            </div>
        )
    }
}

export default Home;