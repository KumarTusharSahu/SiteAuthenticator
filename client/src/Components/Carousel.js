import React from 'react'
import "../Assets/css/Carousel.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import friends from "../Assets/images/friends.svg"
import listeningmusic from "../Assets/images/listeningmusic.webp"
import studying from "../Assets/images/studying.png"

import NeonButton from './NeonButton';

const Carousel = () => {
    return (
        <>

            <div className="centerCarousal">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className='slideContent'>
                                <div className='slideLeft'>
                                    <h1>Enjoy a Life Without Distractions</h1>
                                    <span>Improve your focus when you need it so you can spend more time enjoying your life</span>
                                </div>
                                <div className='slideRight'>
                                    <img src={friends} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='slideContent'>
                                <div className='slideLeft'>
                                    <h1>Spend quality time with people you love</h1>
                                    <span>Stop scrolling when you're with your loved ones</span>
                                </div>
                                <div className='slideRight'>
                                    <img src={listeningmusic} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='slideContent'>
                                <div className='slideLeft'>
                                    <h1>Get better grades at school</h1>
                                    <span>Avoid distractions so you can learn faster and more efficiently
                                    </span>
                                </div>
                                <div className='slideRight'>
                                    <img src={studying} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>



            <NeonButton next="/home">Getting Started</NeonButton>

        </>

    )
}

export default Carousel