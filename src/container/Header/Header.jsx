import React from 'react';
import AppWrap from '../../wrapper/AppWrap';
import Typewriter from "typewriter-effect";
import './Header.scss';
import { images } from '../../constants';

const Header = () => {
    const startTypewriter = (typewriter) => {
        typewriter
            .typeString("वसुधैव कुटुम्बकम")
            .pauseFor(1000)
            .deleteAll()
            .typeString("संपूर्ण विश्व एक परिवार है।")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Welcome to our cultural oasis,\n where the unique voices and visions of the G20 nations come together in harmony.")
            .pauseFor(1000)
            .deleteAll()
            .start();
    };

    return (
        <div className="header">
            <div className="overlay">
                <h1>
                    <Typewriter
                        onInit={startTypewriter}
                        onDestroy={startTypewriter}  // Call startTypewriter when destroyed
                    />
                </h1>
            </div>
            <div className='video'>
                <video src={images.G20_video} id='video' autoPlay loop muted />
            </div>
        </div>
    );
};

export default AppWrap(Header, 'home');
