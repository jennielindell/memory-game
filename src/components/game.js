import React from "react"
import Card from "./card"
import "./game.css"
import shuffle from "shuffle-array"

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

    setupGame = () => {
        const duplicatedPhotos = photos.concat(photos)
        // Same result as above
        // const duplicatedPhotos = [...photos, ...photos]
        const shuffledPhotos = shuffle(duplicatedPhotos)

        return shuffledPhotos.map((url) => ({
            src: url,
            isFlipped: false
        }))
    }



    render() {
        return (
            <div className="game">
                {this.state.cards.map((card) => (
                    <Card src={card.src} />
                ))}
            </div>
        )
    }
}

export default Game
