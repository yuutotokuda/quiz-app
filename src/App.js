import React, {useState, useContext }from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import Endscreen from "./components/Endscreen";

import { QuizContext } from "./Helpers/Context";

import "./App.css";

function App() {

  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">

      <h1>Quiz</h1>

      <QuizContext.Provider value={{ gameState, setGameState}}>
       {gameState === "menu" && <MainMenu />}
       {gameState === "quiz" && <Quiz />}
       {gameState === "endScreen" && <Endscreen />}
      </QuizContext.Provider>
      
    </div> 
  );
}

export default App;
