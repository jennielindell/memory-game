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

    render() {
        return (
            <div className="layout">
                <Title />
                <Game onComplete={this.handleGameComplete} />
                {!this.state.gameRunning && <Success />}
            </div>
        )
    }
}

export default Layout
