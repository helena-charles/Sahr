import React from 'react';

import {
  Link,
} from "react-router-dom";

const SixMonthsAnniversary = () => {
  return (
    <div style={{ margin: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
      <Link to="/">
        Back
      </Link>
      <h1>Happy 24 Weeks Bebey!</h1>
    </div>
  )
}

export default SixMonthsAnniversary;