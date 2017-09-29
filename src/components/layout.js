import React from "react";

import Game from "./game";
import Success from "./success";
import Title from "./title";

import "./layout.css"

class Layout extends React.Component {

    constructor(props) {
        super(props) //run previous argument that has been overwritten
        this.state = {
            gameRunning: true
        }
    }

    handleGameComplete = () => {
        this.setState({ gameRunning: false })
    }

    resetGame = () => {
        this.setState({ gameRunning: true })
    }

    render() {
        return (
            <div className="layout">
                <Title />
                {!this.state.gameRunning && <Success whenClicked={this.resetGame} />}
                {this.state.gameRunning && <Game onComplete={this.handleGameComplete} />}
            </div>
        )
    }
}

export default Layout
