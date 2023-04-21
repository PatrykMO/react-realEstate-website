import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <section className="footer-wrapper">
        <div className="paddings innerWidth flexCenter footer-container">
            {/* left side */}
                <div className="flexColStart footer-left">
                    <img src='./cds-logo2.png' alt='logo' width={120}/>
                    <span className="secondaryText">
                    Your ideal home awaits! <br/> Let us help you find the perfect place to live.
                    </span>
                </div>

            {/* right side */}
            <div className="flexColStart footer-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>Control Tower Puerto Banus Marbella, Malaga 29660 Spain</span>

                <div className="flexCenter footer-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer