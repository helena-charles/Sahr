import React from 'react';
import Image from 'react-bootstrap/Image'
import massageImage from '../../../assets/images/couples-massage.png';

import { Link } from "react-router-dom";

const Massage = () => {

  return (
    <div style={{ margin: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
      <Link to="/">
        Back
      </Link>
      <h1 style={{ textAlign: 'center' }}>We're going to the spa for a couples massage!</h1>
      <Image
        style={{ margin: 12, maxWidth: 375 }}
        src={massageImage}
      />
      <h2 style={{ textAlign: 'center' }}>(We may have to find a different date to do this if it's all booked up)</h2>
      <Link to="/emirates-tour">
        Wish you'd chosen the other option?
      </Link>
    </div>
  )
}

export default Massage;
