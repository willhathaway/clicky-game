import React from "react";
import "./style.css";

// ImageCard returns a container div, a clickable div, and an image element to hold the image:
function ImageCard(props) {
    return (
        <div className="card">
            <div className="img-container" onClick={() => props.click(props.id)}>
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default ImageCard;
