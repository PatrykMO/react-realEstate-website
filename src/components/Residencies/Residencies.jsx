import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';
import './Residencies.css';

const SliderButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="flexCenter residencies-button">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
};

const Residencies = () => {
  return (
    <section className="residencies-wrapper" id='residencies'>
        <div className="paddings innerWidth residencies-container">
            <div className="residencies-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons />
                {
                    data.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="flexColStart residencies-card">
                                <img src={card.image} alt='home'/>

                                <span className="secondaryText residencies-price">
                                    <span style={{color: 'orange'}}>$</span><span>{card.price}</span>
                                </span>

                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies