import React from "react"
import Card from "./card"
import Counter from "./counter"
import "./game.css";

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

    setupGame = () => (
      photos.map((url) => ({
        src: url,
        isFlipped: false
      }))
    )

    render() {
        return (
            <div>
                <div className="gameIntro">
                    <h1>Crazy cat lady</h1>
                </div>
                <div className="game">
                    {this.state.cards.map((card) => (
                        <Card src={card.src} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Game
