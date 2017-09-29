import React from "react"
import Card from "./card"
import Success from "./success"
import "./game.css"
import shuffle from "shuffle-array"
import uuidv4 from "uuid/v4"

const photos = [
    "/images/kitten1.jpg",
    "/images/kitten2.jpg",
    "/images/kitten3.jpg",
    "/images/kitten4.jpg",
    "/images/kitten5.jpg",
    "/images/kitten6.jpg"
]

class Game extends React.Component {

    constructor(props) {
        super(props) //run previous argument that has been overwritten
        this.state = {
            cards: this.setupGame()
        }
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
            isMatched: false,
            id: uuidv4()
        }))
    }

    // This function will be called from the card component becase we have passed it as a prop
    // (called whenClicked) when we render the card component.
    //
    // To generate the new state, we need to .map over the old state, and, if the card we're mapping
    // over is the clicked card, we need to set it's "isFlipped" value to be "true". Otherwise we don't
    // need to change the state for the card.
    handleCardClicked = (clickedCardId) => {
        const newCardState = this.state.cards.map((a) => {
            if (a.id === clickedCardId) {
                a.isFlipped = true
            }
            return a
        })

        this.setState({ cards: newCardState }, this.checkIfCardsMatched)
    }

    checkIfCardsMatched = (b) => {
        const flippedCards = this.state.cards.filter((b) => {
            return b.isFlipped
        })

        if (flippedCards.length === 2) {
            setTimeout(() => {

                if (flippedCards[0].src === flippedCards[1].src) {
                    flippedCards[0].isMatched = true
                    flippedCards[1].isMatched = true

                    const cardIsMatched = this.state.cards.map((c) => {
                        c.isFlipped = false
                        return c
                    })

                    this.setState({ cards: cardIsMatched })
                } else {

                    const newCardsState = this.state.cards.map((c) => {
                        c.isFlipped = false
                        return c
                    })

                    this.setState({ cards: newCardsState })
                }
            }, 1000)
        }
    }

    gameSuccess = () => {
        const matchedCards = this.state.cards.filter((b) => {
            return b.isMatched
        })
        console.log(matchedCards.length, this.state.cards.length)
        if (matchedCards.length === this.state.cards.length) {
            return true

        } else {
            return false
        }
    }


// <Card /> has the following props:
// src; the url of the photo for the vard
// whenClicked: a callback function which the card can evoke
// key: Unique identifier for react to use when rendering from an array
// id: Unique identifier we can use to refer to this card later
// isFlipped: A boolean which will be toggle when the cards is flipped.
    render() {
        return (
            <div className="game">
            {this.gameSuccess() && <Success />}
                {this.state.cards.map((card) => (
                    <Card
                    className={this.getClassName}
                    key={card.id}
                    id={card.id}
                    src={card.src}
                    isFlipped={card.isFlipped}
                    isMatched={card.isMatched}
                    whenClick={this.handleCardClicked} />
                ))}
            </div>
        )
    }
}

export default Game
