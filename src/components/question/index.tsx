import React, { useEffect, useRef, useState, useMemo } from "react";

import './styles.css';
export interface MultiChoiceQuestionProps {
    question: {
        questions: string[],
        answer: string,
        alternatives: string[]
    }
}

const MultiChoiceQuestion: React.FC<MultiChoiceQuestionProps> = (props) => {

    const NUMBER_OF_QUESTIONS = props.question.questions.length

    const options = useRef<HTMLUListElement>(null);

    const [data, setData] = useState(props);
    const [questionIndex, setquestionIndex] = useState<number>(0);

    useEffect(() => {
        clearAnswersDecoration();
    }, [props, options]);

    const SwitchIndex = () => {
        questionIndex < NUMBER_OF_QUESTIONS - 1 ?
            setquestionIndex(
                questionIndex + 1)
            :
            setquestionIndex(0)
    }

    const checkAnswer = (optionsList: HTMLUListElement, className: string = 'right-answer') => {
        const alternatives = Object.values(optionsList.children);
        alternatives.forEach(alternative => {
            if (alternative.textContent === props.question.answer
                || alternative.className === 'right-answer')
                alternative.className = className;
        });
    }

    const clearAnswersDecoration = () => {
        if (options.current) {
            checkAnswer(options.current, '');
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (options.current) {
            checkAnswer(options.current);
        }
    }

    return (
        <div className="question-container">
            <span className="question-body">
                {data.question.questions[questionIndex]}
                <button onClick={SwitchIndex}>Rephrase</button>
            </span>
            <form onSubmit={e => { handleSubmit(e) }}>
                <ul ref={options}>
                    {data.question.alternatives.map(item => (
                        <li className="alternative">
                            <input name={data.question.questions[0]} type="radio" value={item} />
                            <label htmlFor={item}>{item}</label>
                        </li>
                    ))}
                </ul>
                <button className="check-button" type="submit">check</button>
            </form>
        </div>
    );
}

export default MultiChoiceQuestion;