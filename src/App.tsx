import { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState<string>();

  const handleGetJoke = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breed/hound/images/random",
    );
    const jsonBody = await response.json();
    setJoke(jsonBody.message);
  };

  if (joke) {
    return (
      <div>
        <h1>Joke app</h1>
        <img src={joke} alt="dog pic"></img>
        <hr />
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
        <button onClick={handleGetJoke}>Get joke</button>
      </div>
    );
  }
}

export default App;
