import { Link } from 'react-router-dom';
import logo2 from '../../assests/quizzify-logo2.png'
import './styles.css'


interface ContenetsInputPageProps {

}

const ContenetsInputPage: React.FC<ContenetsInputPageProps> = () => {
    return (<div className='contents-page-body'>
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
        <div className="contents">
            Contents
            <textarea 
                className='inputs contents-input'
                name="Text1"
                rows={20}
                placeholder='Enter your text here'
            />
        </div>
        <button className='send-button'>Send</button>
    </div>);
}

export default ContenetsInputPage;