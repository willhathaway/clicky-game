import React from "react";
import "./style.css";

// Scores component returns the current score and the high score:
function Scores(props) {
    return (
        <div className="card" id="scoresDiv">
            <div className="scores-container">
                <p>current score: {props.currentScore}</p>
            </div>
            <div className="scores-container">
                <p>high score: {props.hiScore}</p>
            </div>
        </div>
    );
}


export default Scores;
