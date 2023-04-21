import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown} from 'react-icons/md';
import data from '../../utils/accordion';

import './Value.css';


const Value = () => {
  return (
    <section className="value-wrapper" id='value'>
        <div className="paddings innerWidth flexCenter value-container">
            {/* left side */}
                <div className="flexColStart value-left">
                    <div className="image-container">
                        <img src='./value.png' alt='estate'/>
                    </div>
                </div>
            {/* right side */}
            <div className="flexColStart value-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>The importance we provide you.</span>
                <span className='secondaryText'>
                    We are always prepared to deliver top-notch services.
                    <br />
                    We believe that a conducive living environment can greatly enhance your quality of life.
                </span>

                <Accordion
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                    className='accordian'
                >  
                    {
                        data.map((item, index) => {
                            const [className, setClassName] = useState(null);
                            return (
                                <AccordionItem
                                    className='accordianItem'
                                    key={index}
                                    uuid={index}
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordianButton'>
                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>

                                            <span className="primaryText">
                                                {item.heading}
                                            </span>

                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value