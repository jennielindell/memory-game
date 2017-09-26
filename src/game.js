import React from "react"
import Card from "./card"
import Counter from "./counter"
import "./game.css";

const Game = () => (
    <div>
        <div className="gameIntro">
            <h1>Crazy cat lady</h1>
        </div>
        <Counter />
        <div className="game">
            <Card src="/images/kitten1.jpg" />
            <Card src="/images/kitten2.jpg" />
            <Card src="/images/kitten3.jpg" />
            <Card src="/images/kitten4.jpg" />
        </div>
    </div>
)

export default Game
