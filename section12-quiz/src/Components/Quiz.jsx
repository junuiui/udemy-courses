import { useState, useCallback } from "react";

import QUESTIONS from "../../resources/questions";

import Questions from "./Questions";
import Summary from "./Summary";

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const isCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedValue) {
        setUserAnswers((prev) => {
            return [...prev, selectedValue];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (isCompleted) {
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <div id="quiz">
            <Questions 
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkip={handleSkipAnswer}/>
        </div>
    );
}