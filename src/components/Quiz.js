import React, {useState} from "react";
import {Questions} from "../Helpers/QuestionBank";

function Quiz(){

    const [currentQuestion, setCurrentQuestion] = useState(0);
    return(
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="option">
              <button> {Questions[currentQuestion].optionA}</button>
              <button> {Questions[currentQuestion].optionB}</button>
              <button> {Questions[currentQuestion].optionC}</button>
            </div>
        </div>
    )
}

export default Quiz;