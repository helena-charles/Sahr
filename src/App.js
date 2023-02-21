import './App.css';

import React from 'react';

import Homepage from './components/Homepage';
import SixMonthsAnniversary from './components/SixMonthsAnniversary';
import OneYearAnniversary from './components/OneYearAnniversary';
import FlipBook from './components/OneYearAnniversary/FlipBook.jsx';
import TwentySevenBirthday from './components/TwentySevenBirthday';
import EmiratesTour from './components/TwentySevenBirthday/EmiratesTour';
import Massage from './components/TwentySevenBirthday/Massage';

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
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/6-months-anniversary' element={<SixMonthsAnniversary />} />
            <Route path='/one-year-anniversary' element={<OneYearAnniversary />} />
            <Route path='/flip-book' element={<FlipBook />} />
            <Route path='/27th-birthday' element={<TwentySevenBirthday />} />
            <Route path='/emirates-tour' element={<EmiratesTour />} />
            <Route path='/massage' element={<Massage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;