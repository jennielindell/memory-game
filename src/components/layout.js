import React from "react";
import Game from "./game";
import Title from "./title";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Game />
            </div>
        )
    }
}
export default Layout
