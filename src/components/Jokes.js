import React, { useState, useEffect } from 'react';

function Jokes(){
    // define important states
    [jokes, setJokes] = useState([]); // jokes to display

    // get jokes data first
    const getJokes = async () => {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?amount=10&safe-mode');
        const data = await response.json();
        console.log(data.jokes); // debugging only
        setJokes(data.jokes); // remember the jokes to display
    }

    // get jokes upon first loading this component
    useEffect(() => {
        // this is what we're going to do when triggered
        getJokes();
    }, []); // [] ==> trigger this when first loading

    // display the jokes
    return(
        <div className="jokes">
            {
                jokes.map( (joke) => {
                    return(
                        <div className="joke" key={joke.id}>
                            { 
                                joke.joke // individual element . property 
                            } 
                        </div>
                    )
                } )
            }
        </div>
    )
}

export default Jokes;