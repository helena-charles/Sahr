import React, { useState } from 'react';
import { use100vh } from 'react-div-100vh'
import Clock from 'react-live-clock';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import {
  Link,
} from "react-router-dom";

const Homepage = () => {
  const [heSaidYes, setHeSaidYes] = useState(false);
  const { width, height } = useWindowSize();

  const onYesButtonClick = () => {
    setHeSaidYes(true)
  };
  return (
    <div style={{ minHeight: use100vh(), display: 'flex', justifyContent: 'center' }} className="App">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
        {
          heSaidYes ? (
            <>
              <Confetti
                width={width}
                height={height}
              />
              <h1 style={{ color: '#228B22', fontSize: 36 }}>CONGRATULATIONS YOU HAVE MADE THE BEST DECISION EVER</h1>
              <a style={{ color: '#228B22', fontSize: 24 }} href="https://fairlyoddparents-ok.netlify.app/">See, proof :)</a>
            </>
          ) : (
            <>
              {/* uncomment this to test link to new page */}
              <Link to="/6-months-anniversary">Click for a surprise</Link>
              <p style={{ color: '#228B22', fontSize: 48 }}>22 / 02 / 2022</p>
              <Clock style={{ color: '#228B22', fontSize: 48 }} format={'HH:mm:ss'} ticking={true} timezone={'GB'} />
              <h1 style={{ color: '#228B22', fontSize: 48 }}>SAHR SOLAR</h1>
              <p style={{ color: '#228B22', fontSize: 36 }}>Will you be my boyfriend?</p>
              <button style={{ border: 'none', borderRadius: 10, padding: '12px 24px', color: '#fff', backgroundColor: '#228B22', fontSize: 36 }} onClick={onYesButtonClick}>Yes</button>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Homepage;