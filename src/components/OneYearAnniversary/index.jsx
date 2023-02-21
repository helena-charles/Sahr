import React from 'react';
import Crawl from 'react-star-wars-crawl'
import 'react-star-wars-crawl/lib/index.css'
import {
    Link,
} from "react-router-dom";

import starWarsThemeSound from '../../assets/sounds/star-wars-theme.mp3';

const OneYearAnniversary = () => {
    const playAudio = () => {
        new Audio(starWarsThemeSound).play();
    }
    return (
        <div style={{ background: '#000000' }} onClick={playAudio}>
            <Link to="/flip-book" style={{ marginTop: 24, color: '#00c2cb', fontSize: 24 }}>
                Find out in this thrilling adventure!
            </Link>
            <Crawl
                // style={{ marginTop: -100 }}
                title="Episode II XXII MMXXII"
                subTitle="Galactic Legends: Selenahr's Legacy"
                text="In a galaxy far, far away, Sahrakan and H-3LZ embark on a perilous mission to retrieve a valuable artifact that has been guarded by a powerful Sith Lord. They must fight their way through a sandstorm, dangerous creatures, and the Sith Lord's defenses to retrieve the artifact. Along the way, they use their skills and teamwork to overcome the challenges they face. However, their mission takes an unexpected turn when they find themselves caught in the middle of a space battle, facing explosions and fighting for their survival. Will they be able to retrieve the artifact and return it to the Jedi Order as heroes? Find out in this thrilling adventure!"
            />
            
        </div>
    )
}

export default OneYearAnniversary;