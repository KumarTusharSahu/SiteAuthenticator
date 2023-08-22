import React from 'react'
import { useNavigate } from "react-router-dom";
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

import "../Assets/css/HomeScreen.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import homeCarousel from "../Assets/images/homeCarousel.avif"
import homeIntro from "../Assets/images/homeIntro.avif"

import blocklist from "../Assets/images/grid/blockedlist.svg"
import focusmode from "../Assets/images/grid/focusmode.svg"
import passwordprotection from "../Assets/images/grid/passwordprotection.svg"
import schedule from "../Assets/images/grid/schedule.svg"
import AnimButton from '../Components/AnimButton';



const HomeScreen = () => {

  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/login")
  }

  const navigateToGenerateToken = () => {
    navigate("/token")
  }

  return (
    <>
      <NavBar />
      <div className="home">

        <div className='HomeScreenContent'>
          <div className='carouselBanner'>
            <img src={homeCarousel} alt="" />
            <div className="homeCarousel">
              <h1>Be productive at work</h1>
              <h5 className='anim'>Find out how SiteAuthenticator has helped professionals around the world increase their productivity and improve their focus while at work.</h5>
              <div id="carouselExampleSlidesOnly" class="carousel slide carouselStyle anim" data-bs-ride="carousel">
                <div class="carousel-indicators indicator-color">
                  <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner carousel-inner-color">
                  <div class="carousel-item active">
                    <h5>Scott May</h5>
                    <h6>Product designer</h6>
                    <p>“It's Great! Helped me become so much more productive and set an actual time-frame for my work and leisure time!”</p>
                  </div>
                  <div class="carousel-item">
                    <h5>Verney Tétrault</h5>
                    <h6>Marketing Specialist</h6>
                    <p>“Blocksite is the best app to improve your time management and increase your wellbeing.”</p>
                  </div>
                  <div class="carousel-item">
                    <h5>Eduarda Alves</h5>
                    <h6>Mother of 2</h6>
                    <p>“Saved me probably an hour just today.”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='homeBtnContainer'>
            <AnimButton onClick={navigateToGenerateToken}>Generate Token</AnimButton>
            <AnimButton onClick={navigateToSignIn}> Sign In</AnimButton>
          </div>


        </div>
        <div className='gridHeading'>
          <h1>Your Productivity Tools</h1>
          <p>Check the features SiteAuthenticator offers to help improve your productivity, stay focused, and avoid distractions</p>
        </div>
        <div className="gridContainer">
          <div>
            <img src={blocklist} alt="" />
            <h1>Block List</h1>
            <p>No limit to the sites and apps you can block</p>
          </div>
          <div>
            <img src={focusmode} alt="" />
            <h1>Focus Mode</h1>
            <p>Prevent all distractions within a set amount of time</p>
          </div>
          <div>
            <img src={schedule} alt="" />
            <h1>Schedule</h1>
            <p>Block all your distractions during the hours you choose</p>
          </div>
          <div>
            <img src={passwordprotection} alt="" />
            <h1>Password Protection</h1>
            <p>When you’re tempted to change your settings, you’ll have to enter your password</p>
          </div>
        </div>
        <div className='introHeading'>
          <h1>Take control of your workday</h1>
        </div>
        <div className='intro'>
          <div className='introContent'>
            <h3>Control Your Time</h3>
            <p>One of the most effective skills you can have in life is effective time management. If you’re not managing your time well, you won’t be able to reach your professional or personal goals. With the various features available on BlockSite your time management schedule will never look better.</p>
            <p>You’ll be able to get everything you need to do done using the best time management techniques and still have time to browse your favorite sites and apps!</p>
            <h3>Boost Your Productivity</h3>
            <p>The time has come to increase productivity. So, whether you’re at work, studying at school or just looking for a way to get more done during the day, BlockSite has the best tools to help you improve your productivity and get the results you want quickly and effectively.</p>
          </div>
          <div><img src={homeIntro} alt="" /></div>
        </div>
        <Footer />

      </div>

    </>
  )
}

export default HomeScreen

