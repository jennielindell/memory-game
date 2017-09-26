import React from "react"
import Card from "./card"
import "./game.css";

const Game = () => (
    <div>
        <div className="gameIntro">
            <h1>Crazy cat lady</h1>
            <p className="lead">
            Duis mollis, est non commodo luctus, nisi erat porttitor
            ligula, eget lacinia odio sem nec elit. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor. Sed
            posuere consectetur est at lobortis.
            </p>
        </div>
        <div className="game">
            <Card src="/images/kitten1.jpg" />
            <Card src="/images/kitten2.jpg" />
            <Card src="/images/kitten3.jpg" />
            <Card src="/images/kitten4.jpg" />
        </div>
    </div>
)

export default Game
