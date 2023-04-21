import React from 'react';

import './GetStarted.css';

const GetStarted = () => {
  return (
    <section className="getStarted-wrapper" id='getStarted'>
        <div className="paddings innerWidth getStarted-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Easy Estate</span>
                <span className='secondaryText'>
                Subscribe to our newsletter for exclusive access to unbeatable price quotes! <br />
                Get the best deals delivered straight to your inbox and save big on our super attractive offers.
                </span>

                <button className="button">
                    <a href='mailto:patrykmormul@gmail.com'>Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted