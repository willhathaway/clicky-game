import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import imageArray from "./imageArray.json";
import Scores from "./components/Scores";

let selected = [];
let currentScore = 0;
let hiScore = 0;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageArray: imageArray
        };
    }

    // function called when an image is selected:

    click = id => {

        //pushes the selected image to 'selected' array:
        for (let i = 0; i < imageArray.length; i++) {
            // if the id of the selected image equals the id at the current index...
            if (imageArray[i].id === id) {
                // ...then check whether it already exists in the array:
                if (selected.includes(imageArray[i])) {
                    // if it does, then (TODO) check the current score against the high score, switching if necessary, and reset the game:
                    if (currentScore > hiScore) {
                        hiScore = currentScore;
                    }
                    currentScore = 0;
                    selected = [];
                    alert("NO");
                } else {
                    currentScore ++;
                    selected.push(imageArray[i]);
                }
            }
        }

        // TODO: if statement checking whether the selected image has already been clicked:

        // shuffles the array:
        const Images = this.shuffle(imageArray);
        this.setState({ Images });
    
    }

    // Fisher-Yates shuffle function to shuffle the array of images (called in 'click' function). taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    shuffle = array => {

        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    render() {
        return (
            <Wrapper>
                <h1 className="title">Images</h1>

                <Scores 
                    currentScore={currentScore}
                    hiScore={hiScore}
                />

                {this.state.imageArray.map(image => (

                    <ImageCard
                        id={image.id}
                        key={image.id}
                        image={image.image}
                        click={this.click}
                    />

                ))}

            </Wrapper>
        )
    }
}

export default App;
