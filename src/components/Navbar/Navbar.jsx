import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import "./Navbar.scss";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <a href="https://www.india.gov.in/spotlight/group-twenty-g20" target='_blank'><img src={images.logoG20} alt="logo" /></a>

            </div>
            <ul className='app__navbar-links'>
                {
                    ["home", "about", "globe", "explore"].map((item) => (
                        <li className='app__flex p-text' key={`link=${item}`}>
                            <div />
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))
                }
            </ul>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {/* when toggle is true render the menu block of react */}
                {
                    toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul>
                                {["home", "about", "globe", "explore"].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;