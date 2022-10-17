import React, {useState }from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import Endscreen from "./components/Endscreen";

import "./App.css";

function App() {

  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Emma Watson!</h1>

      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <Endscreen />}
    </div> 
  );
}

export default App;
