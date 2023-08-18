import React from 'react'
import logo from "../Assets/images/logo.png"


import "../Assets/css/Footer.css"
import NavBar from './NavBar';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <div class="footermain">
                <NavBar />
                <div class="footercontent">
                    <h1 class="anim">Stock Photos</h1>
                    <p class="anim">Beautiful, free images and photos that you can download and use for any project. <br /> than any royalty free or stock photos.</p>
                    <div class="links anim">
                        <button><span></span>Free Images</button>
                        <button><span></span>Image API</button>
                    </div>
                </div>
            </div>
            <footer>
                <div class="footerrow">
                    <div class="footercol">
                        <img src={logo} class="footer_logo" />
                        <p class="footer_about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore harum molestias nesciunt,
                            doloremque magni aspernatur iste blanditiis, fugiat quaerat accusamus ut, vero tempore.
                            Fugiat, illum!
                        </p>
                    </div>
                    <div class="footercol">
                        <h5>Office <div class="bottom_line"><span></span></div></h5>
                        <p>2841 Romines Mill Road</p>
                        <p>Plano</p>
                        <p>Texas, ZIP 75074, United States</p>
                        <p class="footer_email">alexastockphotos@gamil.com</p>
                        <h6>+1 - 2145958195</h6>
                    </div>
                    <div class="footercol">
                        <h5>Links <div class="bottom_line"><span></span></div></h5>
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">ABOUT</a></li>
                            <li><a href="">SERVICE</a></li>
                            <li><a href="">CONTACT US</a></li>
                        </ul>
                    </div>
                    <div class="footercol">
                        <h5>Newsletter <div class="bottom_line"><span></span></div></h5>
                        <form>
                            <i class="fa-regular fa-envelope"></i>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit"><i class="fa-solid fa-arrow-right" style={{ color: "#ffffff" }}></i></button>
                        </form>
                        <div class="social_icons">
                            <i class="fa-brands fa-square-facebook social_icon" style={{ color: "#ffffff" }}></i>
                            <i class="fa-brands fa-whatsapp social_icon" style={{ color: "#ffffff" }}></i>
                            <i class="fa-brands fa-twitter social_icon" style={{ color: "#ffffff" }}></i>
                            <i class="fa-brands fa-instagram social_icon" style={{ color: "#ffffff" }}></i>
                        </div>
                    </div>
                </div>
                <hr />
                <p class="copyright">Cosas Learning Ⓒ {year} - All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Footer
