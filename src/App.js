import './App.css';

import React from 'react';

import Homepage from './components/Homepage';
import SixMonthsAnniversary from './components/SixMonthsAnniversary';

import {
  BrowserRouter as Router,
  // Link,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/6-months-anniversary">Click for a surprise</Link>
          </div> */}

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/6-months-anniversary' element={<SixMonthsAnniversary />} />
          </Routes>
        </div>
      </Router>
      {/* <Homepage /> */}
    </>
  );
}

export default App;