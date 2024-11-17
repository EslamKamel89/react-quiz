import { useState } from "react";
import consoleLog from "../consoleLog.jsx";
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png'
export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;


    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(answer) {
        setUserAnswers((prevState) => {
            return consoleLog([...prevState, answer]);
        });
    }

    if (quizIsComplete) {
        return <div id="summary">
            <h2>Quiz completed</h2>
            <img src={quizCompleteImg} alt="Trophy icon" />
        </div>
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort((a, b) => Math.random() - 0.5);

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