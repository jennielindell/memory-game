import React from "react"
import "./card.css";

class Card extends React.Component {

    handleClick = () => (
        alert("I was clicked " + this.props.src)
    )

    render() {
        return (
            <div>
                <img className="card" src={this.props.src} onClick={this.handleClick} alt="" />
            </div>
        )
    }
}

export default Card
