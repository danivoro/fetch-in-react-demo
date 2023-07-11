import React, { useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState<string[]>([]);

  const handleGetJoke = async () => {
    const response = await fetch("https://dog.ceo/api/breed/hound/images/random");
    const jsonBody = await response.json();
    setJokes((prevJokes) => [...prevJokes, jsonBody.message]);
  };

  if (jokes.length > 0) {
    return (
      <div>
        <h1>Dog app</h1>
        {jokes.map((joke, index) => (
        <img src={joke} alt={`dog pic ${index}`} key={index} />
      ))}
        <button onClick={handleGetJoke}>Get another pic</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Joke app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog picture from an API!
        </p>
        <button onClick={handleGetJoke}>Get dog pic</button>
      </div>
    );
  }
}

export default App;
