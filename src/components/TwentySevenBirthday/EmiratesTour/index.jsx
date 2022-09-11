import React from 'react';
import Image from 'react-bootstrap/Image'
import emiratesImage from '../../../assets/images/emirates-tour.png';
import tourHoursImage from '../../../assets/images/tour-hours.png';

import { Link } from "react-router-dom";

const EmiratesTour = () => {

  return (
    <div style={{ margin: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
      <Link to="/">
        Back
      </Link>
      {/* <h1>We're going to the Emirates for a stadium tour!</h1> */}
      <Image
        style={{ margin: 12, maxWidth: 375 }}
        src={emiratesImage}
      />
      <Image
        style={{ margin: 12, maxWidth: 375 }}
        src={tourHoursImage}
      />
      <Link to="/massage">
        Wish you'd chosen the other option?
      </Link>
    </div>
  )
}

export default EmiratesTour;
