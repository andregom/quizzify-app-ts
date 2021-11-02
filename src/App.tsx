import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
declare global {
  interface Window {
    versions:any;
  }
}
const versions = window.versions;
function App() {
  const [showContent, setshowContent] = useState(false);
  const showContentSymbol = showContent ? '' : '...';
  const toggleContentSymbol = !showContent ? '' : '^'
  const contentToShow = <ul>
    {Object.keys(versions).slice(0, 3).map( (key) => (
      <li key={key} >{`${key}: ${versions[key]} `}</li>
    ))}
  </ul>
  const toggledContent = <ul>
    {Object.keys(versions).slice(3).map( (key) => (
      <li key={key} >{`${key}: ${versions[key]} `}</li>
    ))}
  </ul>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Edit <code>src/App.tsx</code> and save to reload.<br />
          
        </div>
        { contentToShow }
        <a className="read-more-link" onClick={()=>{setshowContent(!showContent)}}><div className="toggleShow">{showContentSymbol}</div></a>
        {showContent && toggledContent}
        <a className="read-more-link" onClick={()=>{setshowContent(!showContent)}}><div className="toggleShow">{toggleContentSymbol}</div></a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
