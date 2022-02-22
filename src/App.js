// import logo from './logo.svg';x
import './App.css';

import React, { useState } from 'react';
import Clock from 'react-live-clock';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


function App() {
  const [heSaidYes, setHeSaidYes] = useState(false);
  const { width, height } = useWindowSize();

  const buttonFunction = () => {
    setHeSaidYes(true)
    // window.alert('CONGRATULATIONS YOU HAVE MADE THE BEST DECISION EVER')
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center' }} className="App">
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
        {/* <Clock style={{ color: '#228B22', fontSize: 56 }} format={'HH:mm:ss'} ticking={true} timezone={'GB'} />
        <h1 style={{ color: '#228B22', fontSize: 56 }}>SAHR SOLAR</h1>
        <p style={{ color: '#228B22', fontSize: 48 }}>Will you be my boyfriend?</p>
        <button style={{ border: 'none', borderRadius: 10, padding: '12px 24px', color: '#fff', backgroundColor: '#228B22', fontSize: 48 }} onClick={buttonFunction}>Yes</button> */}
        {/* <button style={{ border: 'none', borderRadius: 10, padding: '12px 24px', color: '#fff', backgroundColor: '#228B22', fontSize: 48 }} onClick={() => setHeSaidYes(true)}>Yes</button> */}

        {
          heSaidYes ? (
            <>
              <Confetti
                width={width}
                height={height}
              />
              <h1 style={{ color: '#228B22', fontSize: 36 }}>CONGRATULATIONS YOU HAVE MADE THE BEST DECISION EVER</h1>
            </>
          ) : (
            <>
              <p style={{ color: '#228B22', fontSize: 56 }}>22 / 02 / 2022</p>
              <Clock style={{ color: '#228B22', fontSize: 56 }} format={'HH:mm:ss'} ticking={true} timezone={'GB'} />
              <h1 style={{ color: '#228B22', fontSize: 56 }}>SAHR SOLAR</h1>
              <p style={{ color: '#228B22', fontSize: 48 }}>Will you be my boyfriend?</p>
              <button style={{ border: 'none', borderRadius: 10, padding: '12px 24px', color: '#fff', backgroundColor: '#228B22', fontSize: 48 }} onClick={buttonFunction}>Yes</button>
            </>
          )
        }



      </div>
    </div>
  );
}

export default App;
