import { useState } from 'react';
import logo from './quizzify-logo.png';
import './App.css';
import { Link } from 'react-router-dom';
declare global {
  interface Window {
    versions: any;
  }
}
const versions = window.versions;
function App() {
  const [showContent, setshowContent] = useState(false);
  const showContentSymbol = showContent ? '' : '...';
  const toggleContentSymbol = !showContent ? '' : '^'
  const contentToShow = <ul>
    {Object.keys(versions).slice(0, 3).map((key) => (
      <li key={key} >{`${key}: ${versions[key]} `}</li>
    ))}
  </ul>
  const toggledContent = <ul>
    {Object.keys(versions).slice(3).map((key) => (
      <li key={key} >{`${key}: ${versions[key]} `}</li>
    ))}
  </ul>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="button-link" to="/get-contents">
          <button className='get-started-button'>Get Started!</button>
        </Link>
        {contentToShow}
        <a className="read-more-link" onClick={() => { setshowContent(!showContent) }}><div className="toggleShow">{showContentSymbol}</div></a>
        {showContent && toggledContent}
        <a className="read-more-link" onClick={() => { setshowContent(!showContent) }}><div className="toggleShow">{toggleContentSymbol}</div></a>
      </header>
    </div>
  );
}

export default App;
