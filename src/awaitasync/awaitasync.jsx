import { useState, useEffect } from 'react';

function JokeComponent() {
    // State to store the joke
    const [joke, setJoke] = useState('');

    // fetchJoke to fetch the joke
    const fetchJoke = async () => {
       try{
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        setJoke(data.value);
       } catch(error){
        console.error('error fetching joke:',error);
       }
    }; 

    // Render the joke
    useEffect(() => {
        fetchJoke();
    }, []);

    function handleCLick(){
        fetchJoke();
    }
    return (
        <button onClick = {handleCLick}>{joke}</button>
    );
}



export default JokeComponent;
