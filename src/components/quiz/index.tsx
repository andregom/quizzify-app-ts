import { useEffect, useState } from "react";
import MultiChoiceQuestion, { MultiChoiceQuestionProps } from "../question";
import './styles.css';

export interface QuizComponentProps {
    data: Array<MultiChoiceQuestionProps>
}

const QuizComponent: React.FC<QuizComponentProps> = (props) => {

    const [content, setContent] = useState<QuizComponentProps>(props);

    useEffect(() => {
        setContent(props);
    }, [props]);

    return (
        <div className="quiz">
            {content.data.map(item => (
                <MultiChoiceQuestion question={item.question} />
            ))}
        </div>
    );
}

export default QuizComponent;