import React from 'react';
import ReactPlayer from 'react-player'
import Image from 'react-bootstrap/Image'
import img1 from '../../assets/images/1.png';
// import videoUrl from '../../assets/how-its-going.MOV';
// import img2 from '../../assets/images/2.png';
// import img3 from '../../assets/images/3.png';
// import img4 from '../../assets/images/4.png';
// import img5 from '../../assets/images/5.png';
// import img6 from '../../assets/images/6.png';
// import img7 from '../../assets/images/7.png';
// import img8 from '../../assets/images/8.png';


import {
  Link,
} from "react-router-dom";

// const images = [
//   // img1,
//   img2,
//   img3,
//   img4,
//   img5,
//   img6,
//   img7,
//   img8,
// ];


const SixMonthsAnniversary = () => {
  const videoUrl = 'https://player.vimeo.com/video/714422912?h=9f96e4a0e7';

  return (
    <div style={{ margin: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
      <Link to="/">
        Back
      </Link>
      <h1 style={{ textAlign: 'center' }}>Happy 24 Weeks Bebey!</h1>
      <div>
        <h2>How it started...</h2>
        <Image
          style={{ margin: 12, maxHeight: 300 }}
          src={img1}
        />
      </div>
      <h2>How it's going...</h2>
      <ReactPlayer
        url={videoUrl}
        controls={true}
      />
      {/* <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {images.map(imgSrc => (
          <Image
            style={{ margin: 12, maxHeight: 300 }}
            src={imgSrc}
          />
        )
        )}
      </div> */}
    </div>
  )
}

export default SixMonthsAnniversary;

{/* <iframe src="https://player.vimeo.com/video/714422912?h=9f96e4a0e7" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */ }