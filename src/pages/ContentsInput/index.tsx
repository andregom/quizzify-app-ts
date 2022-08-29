import { Link } from 'react-router-dom';
import logo2 from '../../assests/quizzify-logo2.png'
import QuizComponent, {QuizComponentProps} from '../../components/quiz';
import {MultiChoiceQuestionProps} from '../../components/question';

import './styles.css'

import axios, { BASE_URL } from "../../api/axios";
import { useState } from 'react';

const POST_TEXT_CONTENT_URL = '/quiz/mult/1';
interface ContenetsInputPageProps {

}

const ContenetsInputPage: React.FC<ContenetsInputPageProps> = () => {

    const [quizContent, setQuizContent] = useState<QuizComponentProps>({data: []});
    const [text, setText] = useState<string>('');

    const postTextContent = async (text): Promise<MultiChoiceQuestionProps[]> => {
        const { data: response } = await axios.post(`${BASE_URL}${POST_TEXT_CONTENT_URL}`,
            JSON.stringify(text),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false
            }
        );

        return response;
    };

    const handleSubmit = async () => {
        const questions = await postTextContent({'context': text});
        setQuizContent({data: questions});
    }

    return (
        <div className='contents-page-body'>
            <Link className="button-link" to="/">
                <button className='go-back-button'>&lt;</button>
            </Link>
            <div className='logo-container'>
                <img src={logo2} className="app-logo2" alt="logo" />
                uizzify
            </div>
            <div className="subject">
                <div>
                    Subject: <span className='sub-text'>This is not important, but could be useful in the future.</span>
                </div>
                <input
                    className='inputs about-input'
                    type="text"
                    placeholder='What is it about?'
                />
            </div>
            <form className="contents">
                <div className="contents">
                    Contents
                    <textarea
                        className='inputs contents-input'
                        name="Text1"
                        rows={20}
                        placeholder='Enter your text here'
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <Link className="send-button-link" to={{}}>
                    <button onClick={handleSubmit} type='submit' className='send-button'>Send</button>
                </Link>
            </form>
            <div className='quiz-container'>
                <QuizComponent data={quizContent.data}/>
            </div>
        </div>);
}

export default ContenetsInputPage;