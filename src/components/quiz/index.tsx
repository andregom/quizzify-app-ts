import MultiChoiceQuestion, { MultiChoiceQuestionProps } from "../question";
import './styles.css';

interface QuizComponentProps {
    // data: Array<MultiChoiceQuestionProps>
}

const QuizComponent: React.FC = () => {

    const props = {
        data: [
            {
                alternatives: [
                    "Wilde",
                    "Hawking",
                    "Leonardo Da Vinci",
                    "Bletchley Park",
                    "Ada Lovelace",
                    "Turing",
                    "Brilliant Man"
                ],
                answer: "Turing",
                questions: [
                    "question: What was the turing problem for Turing machines?",
                    "question: What was the turing problem?",
                    "question: What was the question?"
                ]
            },
            {
                alternatives: [
                    "Computer scientist",
                    "Biochemist",
                    "Electrical Engineering",
                    "Computational Neuroscience",
                    "Machine Learning",
                    "Strong Background",
                    "Theoretical Mathematics"
                ],
                answer: "Computer scientist",
                questions: [
                    "question: What was an English mathematician?",
                    "question: What was the name of the English mathematician?",
                    "question: Who was an English mathematician?"
                ]
            },
            {
                alternatives: [
                    "Formal Logic",
                    "Other Sciences",
                    "Mathematics",
                    "Modern Physics",
                    "Subfield",
                    "Probability Theory",
                    "Group Theory"
                ],
                answer: "Mathematics",
                questions: [
                    "question: What was Turing's degree in?",
                    "question: What was his degree in?",
                    "question: What was his degree in mathematics?"
                ]
            },
            {
                alternatives: [
                    "Differential Equation",
                    "Floating Point Numbers",
                    "Turing machine",
                    "Parameterization",
                    "Recursive Algorithm",
                    "Boolean Logic",
                    "Matrix Multiplication"
                ],
                answer: "Turing machine",
                questions: [
                    "question: What was Turing machine?",
                    "question: What was the Turing machine?",
                    "question: What was the question?"
                ]
            },
            {
                alternatives: [
                    "Stratford",
                    "Cambridge",
                    "Newcastle",
                    "Loughborough",
                    "Trinity College",
                    "Chesterfield",
                    "Reading"
                ],
                answer: "Cambridge",
                questions: [
                    "question: Where did he graduate from?",
                    "question: Where did he graduate?",
                    "question: Where did he get his PhD?"
                ]
            },
            {
                alternatives: [
                    "Biologist",
                    "Polymath",
                    "Von Neumann",
                    "Neuroscientist",
                    "Mathematician",
                    "Ramanujan",
                    "Probability Theory"
                ],
                answer: "Mathematician",
                questions: [
                    "question: What was Alan Mathison Turing?",
                    "question: What was the English mathematician?",
                    "question: What was the name of Alan Mathison Turing?"
                ]
            },
            {
                alternatives: [
                    "Machine",
                    "Software",
                    "Storage Device",
                    "Workstation",
                    "Configuration",
                    "Entire Computer",
                    "Appliance"
                ],
                answer: "Machine",
                questions: [
                    "question: What was Turing machine?",
                    "question: What was the Turing machine?",
                    "question: What was Turing's halting problem?"
                ]
            },
            {
                alternatives: [
                    "October",
                    "Late August",
                    "Sept",
                    "The End Of May",
                    "June",
                    "The End Of March",
                    "December"
                ],
                answer: "June",
                questions: [
                    "question: When was Alan Mathison Turing born?",
                    "question: When was Alan Mathison Turing?",
                    "question: When was Alan Turing born?"
                ]
            },
            {
                alternatives: [
                    "Compsci",
                    "Computer science",
                    "Physics Degree",
                    "Applied Math",
                    "Electrical Engineering",
                    "Bioinformatics",
                    "Biomedical Engineering"
                ],
                answer: "Computer science",
                questions: [
                    "question: What was the name of the English mathematician?",
                    "question: What was Alan Mathison Turing OBE FRS?",
                    "question: What was Alan Mathison Turing?"
                ]
            },
            {
                alternatives: [
                    "Cryptanalyst"
                ],
                answer: "Cryptanalyst",
                questions: [
                    "question: What was cryptanalyst?",
                    "question: What was the name of the British mathematician?",
                    "question: What was the name of the English mathematician?"
                ]
            },
            {
                alternatives: [
                    "Probability Distributions",
                    "Topology",
                    "Quantum Field Theory",
                    "Complex Functions",
                    "Boolean Logic",
                    "Computation",
                    "Physical System"
                ],
                answer: "Computation",
                questions: [
                    "question: How did he define a Turing machine?",
                    "question: What was Turing's answer to the question?",
                    "question: What was the answer to the question?"
                ]
            },
            {
                alternatives: [
                    "William James",
                    "Schopenhauer",
                    "Philospher",
                    "Heidegger",
                    "Polymath",
                    "Philosopher",
                    "Daniel Dennett"
                ],
                answer: "Philosopher",
                questions: [
                    "question: What was the name of the English mathematician?",
                    "question: What was an English mathematician?",
                    "question: What was Alan Mathison Turing OBE FRS?"
                ]
            },
            {
                alternatives: [
                    "Bucharest",
                    "Zurich",
                    "Canberra",
                    "Mexico City",
                    "Frankfurt",
                    "Sheffield",
                    "London"
                ],
                answer: "London",
                questions: [
                    "question: Where was Alan Mathison Turing born?",
                    "question: Where was Alan Turing born?",
                    "question: What was the birthplace of Alan Turing?"
                ]
            },
            {
                alternatives: [
                    "First World War",
                    "Wwi",
                    "Ww Ii",
                    "World War I",
                    "Ww1",
                    "Second world war",
                    "Wwii"
                ],
                answer: "Second world war",
                questions: [
                    "question: When did Turing work at Bletchley Park?",
                    "question: When did Turing work for the GC&CS?",
                    "question: When did Turing work for GC&CS?"
                ]
            },
            {
                alternatives: [
                    "Government code"
                ],
                answer: "Government code",
                questions: [
                    "question: What was Turing's role during the Second World War?",
                    "question: What was Alan Turing's role during the Second World War?",
                    "question: When did Turing work at Bletchley Park?"
                ]
            }
        ]
    }

    return (
        <div className="quiz">
            {props.data.map(question => (
                <MultiChoiceQuestion question={question} />
            ))}
        </div>
    );
}

export default QuizComponent;