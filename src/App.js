// import logo from './logo.svg';x
import './App.css';

import React from 'react';
import Clock from 'react-live-clock';
// import useWindowSize from './useWindowSize';
// import Confetti from 'react-confetti'


function App() {
  // const [heSaidYes, setHeSaidYes] = useState(false);
  // const { width, height } = useWindowSize()

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
        <Clock style={{ color: '#228B22', fontSize: 56 }} format={'HH:mm:ss'} ticking={true} timezone={'GB'} />
        <h1 style={{ color: '#228B22', fontSize: 56 }}>SAHR SOLAR</h1>
        <p style={{ color: '#228B22', fontSize: 48 }}>Will you be my boyfriend?</p>
        <button style={{ border: 'none', borderRadius: 10, padding: '12px 24px', color: '#fff', backgroundColor: '#228B22', fontSize: 48 }} onClick={() => window.alert('CONGRATULATIONS YOU HAVE MADE THE BEST DECISION EVER')}>Yes</button>

        {/* {
          heSaidYes && (
            <Confetti
              width={width}
              height={height}
            />
          )
        } */}



      </div>
    </div>
  );
}

export default App;
