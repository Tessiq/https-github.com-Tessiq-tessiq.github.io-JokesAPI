import './App.css';
import React, { useState, useEffect } from 'react';
const Jokes = () => {
  const [joke, setJokes] = useState('');
  useEffect(() => {
    getJokes()
  }, []);
    const getJokes = () => {
      const url = "https://api.chucknorris.io/jokes/random";
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setJokes(data);
      })
    }
    const handleClick = () => {
      getJokes();
    }
    return (
      <div className="App">
        <p>{joke.value}</p>
        <button onClick={handleClick}>New Joke</button>
      </div>
    );
  }
export default Jokes;