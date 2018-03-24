import React, { Component } from "react";
import "./index.css";
import Faces from "../../Components/Faces";
import Details from "../../Components/Details";
import data from "./data.json";
import { CSSTransition } from 'react-transition-group';

const icons = {
    upArrow: "up-arrow.png",
    downArrow: "down-arrow.png"
}

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={500}
        classNames="example"
    >
        {children}
    </CSSTransition>
);

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageCount: 0,
            currentImage: "",
            enterTransition: false
        }
    }

    componentDidMount() {
        this.setState(function (prevState, props) {
            return {
                currentImage: data.selection[prevState.currentImageCount],
                enterTransition: true
            }
        })
    }

    scrollUp() {
        let count = this.state.currentImageCount - 1
        if (this.state.currentImageCount > 0) {
            this.setState(function (prevState, props) {
                return {
                    currentImageCount: count,
                    currentImage: data.selection[count]
                }
            })
        }
    }

    scrollDown() {
        let count = this.state.currentImageCount + 1
        if (count < data.selection.length) {
            this.setState(function (prevState, props) {
                return {
                    currentImageCount: count,
                    currentImage: data.selection[count],
                }
            })
        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="mainSection">
                    <Fade in={this.state.enterTransition}>
                        <div className="innerContainer">
                            <Details data={this.state.currentImage} />
                            <Faces data={this.state.currentImage} upArrow={icons.upArrow} downArrow={icons.downArrow} scrollUp={() => this.scrollUp()} scrollDown={() => this.scrollDown()} />
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Home;