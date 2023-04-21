import React from 'react';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill, BsCameraVideoFill } from 'react-icons/bs';
import { FcVideoCall } from 'react-icons/fc'

import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-wrapper" id='contact'>
        <div className="paddings innerWidth flexCenter contact-container">
            {/* left side */}
            <div className="flexColStart contact-left">
                <span className='orangeText'>Contact Us</span>
                <span className='primaryText'>We're easily reachable</span>
                <span className='secondaryText'>Exceptional service guaranteed!</span>
            
                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Phone</span>
                                    <span className='secondaryText'>034 123 564 897</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>034 123 564 897</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>

                    {/* second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsCameraVideoFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>034 123 564 897</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>034 123 564 897</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Us Now</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="flexColCenter contact-right">
                <div className="image-container">
                    <img src='./contact.png'/>
                </div>
            </div>
        </div>
    </section>            
  )
}

export default Contact


 