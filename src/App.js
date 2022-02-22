// import logo from './logo.svg';x
import './App.css';

import React from 'react';
import Clock from 'react-live-clock';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>SAHR SOLAR</h1>
      <p>Will you be my boyfriend?</p>



      <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    </div>
  );
}

export default App;
