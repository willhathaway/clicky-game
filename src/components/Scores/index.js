import React from "react";
import "./style.css";

function Scores(props) {
    return (
        <div className="card" id="scoresDiv">
            <div className="scores-container">
                <p>{props.currentScore}</p>
            </div>
            <div className="scores-container">
                <p>{props.hiScore}</p>
            </div>
        </div>
    );
}

export default Scores;
