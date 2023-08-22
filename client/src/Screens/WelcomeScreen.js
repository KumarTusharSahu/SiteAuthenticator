import React from 'react'
import "../Assets/css/WelcomeScreen.css"
import { TypeAnimation } from 'react-type-animation';

import background3 from "../Assets/images/main-bg-0-0.png";
import background1 from "../Assets/images/main-bg-0_1.webp";
import background2 from "../Assets/images/main-bg-1_1.webp";
import background4 from "../Assets/images/main-bg-2_1.webp";
import background5 from "../Assets/images/main-bg-3.png";
import slideBorder from "../Assets/images/slideBorder.svg";

import Carousel from '../Components/Carousel';

const WelcomeScreen = () => {
  return (
    <>
      <div className="welcomeContainer">
        <div className="welcome">
          <div className="background1">
            <img src={background1} alt="" className="back" />
          </div>
          <div className="background2">
            <img src={background2} alt="" className="back" />
          </div>
          <div className="background3">
            <img src={background3} alt="" className="back" />
          </div>
          <div className="background4">
            <img src={background4} alt="" className="mountain" />
          </div>
          <div className="background5">
            <img src={background5} alt="" className="horse" />
          </div>
          <div className='welcomebox'>

            <span className='mainHeading'>Block Websites</span>

            <TypeAnimation className='subHeading'
              sequence={[
                'Avoid distractions.',
                1000,
                'Be more focused.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div className="content1">
        <div className="borderContainer">
          <img src={slideBorder} alt="slideBorder" className='slideBorder' />
          <Carousel />
        </div>
      </div>

    </>
  )
}

export default WelcomeScreen
