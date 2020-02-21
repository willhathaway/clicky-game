This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Clicky Game: A React Game by Will Hathaway

This is a memory game, in which users have to try to click all the unique images displayed without clicking on an image they have already guessed.

The game is made harder by the images reshuffling on each click.

See if you can get to 12!

## Getting started:

To view the deployed game, visit [https://clicky-game-wh.herokuapp.com/].

To launch the game on your own localhost, download this repository and run ```npm start```.

## How it works:

This is a React app, which allows for the dynamic reshuffling of elements and recalculating of scores without having to refresh the page.

The project is rendered by the App.js file, which also contains the functions for shuffling the images and handling player guesses.

When an image is clicked, the click() function is called. This function provides the core functionality of the game, and can be understood by following the accompanying comments:

```
// function called when an image is selected (with id argument):
    click = id => {
        // variables declared referring to state:
        let { imageArray, selected, currentScore, hiScore } = this.state;
        //pushes the selected image to 'selected' array:
        for (let i = 0; i < imageArray.length; i++) {
            // if the id of the selected image equals the id at the current index...
            if (imageArray[i].id === id) {
                console.log('selected', selected)
                // ...then check whether it already exists in the array:
                if (selected.includes(imageArray[i])) {
                    // console.log(imageArray)
                    console.log('immage a i', imageArray[i])

                    // if it does, then (TODO) check the current score against the high score, switching if necessary, and reset the game:
                    if (currentScore > hiScore) {
                        this.setState({
                            hiScore: currentScore
                        })
                    }
                    this.setState({
                        currentScore: 0,
                        selected: []
                    })
                    alert("Try again!");
                } else {
                    this.setState({
                        selected: [...selected, imageArray[i]],
                        currentScore: (currentScore + 1)
                    })
                }
            }
        }

        // shuffles the array:
        const Images = this.shuffle(imageArray);
        this.setState({ Images });
    }
```

## I hope you enjoy Clicky Game!