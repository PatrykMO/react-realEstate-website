import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="flexCenter paddings innerWidth hero-container">
            {/* Hero left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle" />
                    <motion.h1
                        initial={{y: '2rem', opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition = {{
                            duration: 2,
                            type: 'spring',
                        }}
                    >
                        Find <br /> Your Dream <br /> Property.
                    </motion.h1>
                </div>

                <div className="flexColStart hero-description">
                    <span className='secondaryText'>
                        Discover diverse properties with ease.
                    </span>
                    
                    <span className='secondaryText'>
                        Overcome all challenges and obstacles in your search for a residence.
                    </span>
                </div>

                <div className='flexCenter search-bar'>
                    <HiLocationMarker color='var(--blue)' size={25} />
                    <input type='text'/>
                    <button className='button'>
                        Search
                    </button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={800} end={1000} duration={6}/>
                            <span>+</span>                       
                        </span>
                        <span className='secondaryText'>Premium Products </span>
                    </div>

                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={150} end={200} duration={6}/>
                            <span>+</span>                       
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>

                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={5} end={10} duration={6}/>
                            <span>+</span>                       
                        </span>
                        <span className='secondaryText'>Award wining</span>
                    </div>
                </div>
            </div>

            {/* Hero right side */}
            <div className="flexCenter hero-right">
                <motion.div 
                    className='image-container'
                    initial={{x: '7rem', opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: 'spring',
                    }}
                >
                    <img src='./hero-image.png' alt='real-estate'/>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero