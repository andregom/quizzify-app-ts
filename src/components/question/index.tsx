import { useState } from "react";

export interface MultiChoiceQuestionProps {
    question: {
        questions: string[],
        answer: string,
        alternatives: string[]
    }
}

const MultiChoiceQuestion: React.FC<MultiChoiceQuestionProps> = (props) => {

    const NUMBER_OF_QUESTIONS = props.question.questions.length

    const [questionIndex, setquestionIndex] = useState<number>(0);

    const SwitchIndex = () => {
        questionIndex < NUMBER_OF_QUESTIONS - 1 ?
            setquestionIndex(
                questionIndex + 1)
            :
            setquestionIndex(0)
    }

    return (
        <div className="question-container">
            <span className="question-body">
                {props.question.questions[questionIndex]}
                <button onClick={SwitchIndex}>Rephrase</button>
            </span>
            <form>
                <ul>
                    {props.question.alternatives.map(item => (
                        <li className="alternative">
                            <input name={props.question.questions[0]} type="radio" value={item} />
                            <label htmlFor={item}>{item}</label>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    );
}

export default MultiChoiceQuestion;