import React from "react"
import Card from "./card"
import "./game.css"
import shuffle from "shuffle-array"
import uuidv4 from "uuid/v4"

const photos = [
    "/images/kitten1.jpg",
    "/images/kitten2.jpg",
    "/images/kitten3.jpg",
    "/images/kitten4.jpg"
]

class Game extends React.Component {

    constructor(props) {
        super(props) //run previous argument that has been overwritten
        this.state = {
            cards: this.setupGame()
        }
    }

    // Function which will take one argument, a card src
    handleCardClicked = (cardId) => {
        console.log(cardId)
    }

    setupGame = () => {
        const duplicatedPhotos = photos.concat(photos)
        // Same result as above
        // const duplicatedPhotos = [...photos, ...photos]

        const shuffledPhotos = shuffle(duplicatedPhotos)

        // Create an array
        return shuffledPhotos.map((url) => ({
            src: url,
            isFlipped: false,
            id: uuidv4()
        }))
    }


// <Card /> has the following props:
// src; the url of the photo for the vard
// whenClicked: a callback function which the card can evoke
// key: Unique identifier for react to use when rendering from an array
// id: Unique identifier we can use to refer to this card later
    render() {
        return (
            <div className="game">
                {this.state.cards.map((card) => (
                    <Card
                    className={this.getClassName}
                    key={card.id}
                    id={card.id}
                    src={card.src}
                    isFlipped={card.isFlipped}
                    whenClick={this.handleCardClicked} />
                ))}
            </div>
        )
    }
}

export default Game
