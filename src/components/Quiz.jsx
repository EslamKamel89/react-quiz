import { useState } from "react";
import consoleLog from "../consoleLog.jsx";
import QUESTIONS from '../questions.js';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort((a, b) => Math.random() - 0.5);
    function handleSelectAnswer(answer) {
        setUserAnswers((prevState) => {
            return consoleLog([...prevState, answer]);
        });
    }

    return <div id="quiz">
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map((answer) => {
                    return <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                })}
            </ul>
        </div>
    </div>;
}