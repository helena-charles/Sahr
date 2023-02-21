import React from 'react';
import HTMLFlipBook from "react-pageflip";
import Image from 'react-bootstrap/Image'

import img1 from '../../assets/images/flip-book/1.png';
// import img2 from '../../assets/images/flip-book/2.png';
import img3 from '../../assets/images/flip-book/3.png';
// import img4 from '../../assets/images/flip-book/4.png';
import img5 from '../../assets/images/flip-book/5.png';
// import img6 from '../../assets/images/flip-book/6.png';
import img7 from '../../assets/images/flip-book/7.png';
import img8 from '../../assets/images/flip-book/8.png';

const FlipBook = () => {
    return (
        <div style={{ background: '#000000' }}>
            <HTMLFlipBook style={{ marginTop: -100 }} width={850} height={600}>
                <div className="demoPage">
                    <Image
                        style={{ margin: 12, maxHeight: 600 }}
                        src={img1}
                    />
                </div>
                {/* <div className="demoPage">
                    <Image
                        style={{ margin: 12, maxHeight: 600 }}
                        src={img2}
                    />
                </div> */}
                <div className="demoPage">
                    <Image
                        style={{ margin: 12, maxHeight: 600 }}
                        src={img3}
                    />
                </div>
                {/* <div className="demoPage">
                    <Image
                        style={{ margin: 12, maxHeight: 600 }}
                        src={img4}
                    />
                </div> */}
                <div className="demoPage">
                    <Image
                        style={{ margin: 12, maxHeight: 600 }}
                        src={img5}
                    />
                </div>
                {/* <div className="demoPage">
                    <Image
                        style={{ margin: 12, maxHeight: 600 }}
                        src={img6}
                    />
                </div> */}
                <div className="demoPage">
                    <Image
                        style={{ margin: 12, maxHeight: 600 }}
                        src={img7}
                    />
                </div>
                <div className="demoPage">
                    <Image
                        style={{ margin: 12, maxHeight: 600 }}
                        src={img8}
                    />
                </div>
            </HTMLFlipBook>
        </div>
    )
}

export default FlipBook;