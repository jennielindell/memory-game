import React from "react" // We need React to use React
import "./card.css" // React injects css into the <head> component

// Defining a "Card" component. That component is inheriting functions from React.Component
class Card extends React.Component {

    // The function we call from onClick. We give it a name 'handleClick'and it takes no argument().
    // Because it's in this class, it has access to 'this', so it can use this.props
    handleClick = () => {
        //alert("I was clicked " + this.props.src)
        this.props.whenClick(this.props.id)
    }

    // Function to return a ddifferent class name when the prop "isFlipped" is true or false.
    // It need
    getClassName = () => {
        if(this.props.isMatched) {
            return "card matched flipped"

        } else if(this.props.isFlipped) {
            return "card flipped"

        } else {
            return "card unflipped"
        }
    }

    // Props:
    // alt: ""
    // className: "card"
    // onClick: fn()
    // src: "/images/kitten1.jpg"

    // Render is a required function in a component.
    // React till invoke this function when it mounts the component.

    render() { // NOT using the fat arrow.

        // The render needs to return JSX.
        // JSX is basically HTML, but you can use components as well,
        // for example when we render this card, we do so in the Game component by using <Card />
        // Props become an object so, className="foo" becomes { className: "foo" }
        // on this.props, and onClick becomes { onClick: () => {} }
        return (
            <div className={this.getClassName()} onClick={this.handleClick}>
                <img src={this.props.src} id={this.props.id} alt="" />
            </div>
        )
    }
}

// To be able to use "import Card from "./card" we need to export it.
export default Card
