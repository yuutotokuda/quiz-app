import React, {useCallback, useContext} from "react";
import {QuizContext} from "../Helpers/Context";
import {Questions} from "../Helpers/QuestionBank"
import "../App.css"

function Endscreen (){
    const {score, setScore, setGameState} = useContext(QuizContext);
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu")
    }
    return(
        <div>
           {""}
           <h1>Quiz Finished</h1>
           <h3>{score} / {Questions.length}</h3>
           <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default Endscreen;