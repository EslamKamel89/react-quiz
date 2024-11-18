import { useCallback, useState } from "react";
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import Question from "./Question.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState('')
    const activeQuestionIndex = answerState == '' ? userAnswers.length : userAnswers.length - 1;


    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
        setAnswerState('answered');
        setUserAnswers((prevState) => {
            return [...prevState, answer];
        });
        setTimeout(() => {
            if (answer == QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }
            setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex])
    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null)
        ,
        [handleSelectAnswer],
    )



    if (quizIsComplete) {
        return <div id="summary">
            <h2>Quiz completed</h2>
            <img src={quizCompleteImg} alt="Trophy icon" />
        </div>
    }

    return <div id="quiz">
        <Question
            questionText={QUESTIONS[activeQuestionIndex].text}
            answers={QUESTIONS[activeQuestionIndex].answers}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            selectedAnswer={userAnswers[userAnswers.length - 1]}
            answerState={answerState}
            activeQuestionIndex={activeQuestionIndex}
            key={activeQuestionIndex}
        />
    </div>;
}