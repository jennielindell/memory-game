import React from "react";

import Game from "./game";
import Title from "./title";
import "./layout.css"

class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <Title />
                <Game />
            </div>
        )
    }
}

export default Layout
