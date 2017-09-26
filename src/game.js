import React from "react"
import Card from "./card"
import Counter from "./counter"
import "./game.css";

class Game extends React.Component {

    state = {
        cards: [
            { src: "/images/kitten1.jpg" },
            { src: "/images/kitten2.jpg" },
            { src: "/images/kitten3.jpg" },
            { src: "/images/kitten4.jpg" }
        ]
    }

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
