import React from "react"
import Card from "./card"
import "./game.css"

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
        //const duplicatedPhotos = photos.concat(photos)
        const duplicatedPhotos = [...photos, ...photos]

        return photos.concat(photos).map((url) => ({
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
