import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import "./About.scss";
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';



const About = () => { 

  return (
    <>
      <h2 className='head-text'>Celebrating Diversity: The G20 Culture Showcase</h2>
      <p className='p-text1'>From art and music to food and fashion, the G20 nations are a melting pot of diverse cultural influences.</p>

      <div className='app__profiles'>
        < motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
        >
          <video src={images.about1} autoPlay loop muted />
          <h2 className='bold-text' style={{ marginTop: 20 }}>Dressing the G20</h2>
          <p className='p-text' style={{ marginTop: 10 }}>A Journey Through Culture and Tradition" - Immerse yourself in the diverse cultures and traditions of the G20 nations through their beautiful and distinctive attire.</p>
        </motion.div>
        < motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
        >
          <video src={images.about2} autoPlay loop muted />
          <h2 className='bold-text' style={{ marginTop: 20 }}>Global Flavors</h2>
          <p className='p-text' style={{ marginTop: 10 }}>A Culinary Journey Through the G20" - Embark on a mouthwatering trip around the G20 countries and discover their unique culinary traditions.</p>
        </motion.div>
        < motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
        >
          <video src={images.about3} autoPlay loop muted />
          <h2 className='bold-text' style={{ marginTop: 20 }}>G20 Tongues</h2>
          <p className='p-text' style={{ marginTop: 10 }}>The Languages of Globalization" - Get ready to embark on a linguistic journey through the G20 countries, and learn about the languages that are driving globalization.</p>
        </motion.div>
        < motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
        >
          <video src={images.about4} autoPlay loop muted />
          <h2 className='bold-text' style={{ marginTop: 20 }}>G20 Grooves</h2>
          <p className='p-text' style={{ marginTop: 10 }}>Celebrating Dance and Cultural Exchange" - Celebrate the power of dance to unite and inspire, and discover the ways in which it promotes cultural exchange in the G20 nations.</p>
        </motion.div>
      </div >
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 'about', 'app__color1bg'); 