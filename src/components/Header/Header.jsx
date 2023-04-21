import React, {useState} from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

import './Header.css';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const getMenuStyle = (mobileMenu) => {
    if(document.documentElement.clientWidth <= 800) {
      return {right: !mobileMenu && '-100%'}
    }
  }
  return (
    <section className='header-wrapper'>
        <div className='flexCenter paddings innerWidth header-container'>
            <img
                src='./cds-logo.png' alt='logo' width={100}
            />
            <OutsideClickHandler onOutsideClick={() => {setMobileMenu(false)}}>
                <div className="flexCenter header-menu" style={getMenuStyle(mobileMenu)}>
                  <a href="#residencies">Residencies</a>
                  <a href="#value">Our Values</a>
                  <a href="#contact">Contact Us</a>
                  <a href="#getStarted">Get Started</a>

                  <button className='button'>
                    <a href="">Contact</a> 
                  </button>
                  
                </div>
            </OutsideClickHandler>
          

            <div className="menu-icon" onClick={() => setMobileMenu((prev) => !prev)}>
              <BiMenuAltRight size={30} />
            </div>
        </div>
    </section>
  )
}

export default Header