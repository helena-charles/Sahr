import React from 'react';
import Image from 'react-bootstrap/Image'
import massageImage from '../../assets/images/couples-massage.png';
import emiratesImage from '../../assets/images/emirates-tour.png';

import { Link } from "react-router-dom";

const TwentySevenBirthday = () => {

  return (
    <div style={{ margin: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
      <Link to="/">
        Back
      </Link>
      <h1 style={{ textAlign: 'center' }}>HAPPY 27TH BIRTHDAY SAHR!</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link to="/massage">
          Relax and unwind - feel your tensions melt away
        </Link>
        <Image
          style={{ margin: 12, maxWidth: 375 }}
          src={massageImage}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link to="/emirates-tour">
          Walk in the footsteps of your footballing heroes
        </Link>
        <Image
          style={{ margin: 12, maxWidth: 375 }}
          src={emiratesImage}
        />
      </div>
    </div>
  )
}

export default TwentySevenBirthday;
