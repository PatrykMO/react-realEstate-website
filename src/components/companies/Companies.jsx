import React from 'react';

import './Companies.css';


const Companies = () => {
  return (
    <section className="companies-wrapper">
        <div className="paddings innerWidth flexCenter companies-container">
            <img src='./realty.png' alt='realty'/>
            <img src='./equinix.png' alt='equinix'/>
            <img src='./tower.png' alt='tower'/>
            <img src='./prologis.png' alt='prologis'/>
        </div>
    </section>
  )
}

export default Companies