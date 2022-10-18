import React, {useCallback, useContext} from "react";
import {QuizContext} from "../Helpers/Context";

function MainMenu (){
    
    const {gameState, setGameState} = useContext(QuizContext);

    return(
        <div>
          <button onClick={() => {setGameState("quiz")}}>Start Quiz</button>
        </div>
    )
}

export default MainMenu;