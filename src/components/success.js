import React from "react"

import "./success.css"

class Success extends React.Component {

    render() {
        return (
            <div className="success">
                <h1 className="success_message">Aaaahhh!! Cuteness-overload!!</h1>
                <button className="success_button" onClick={this.props.whenClicked} >More kittens!</button>
            </div>
        )
    }
}

export default Success
