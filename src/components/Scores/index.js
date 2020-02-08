import React from "react";
import "./style.css";

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
