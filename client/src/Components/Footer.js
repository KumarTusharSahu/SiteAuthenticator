import React from 'react'
import logo from "../Assets/images/logo.png"


import "../Assets/css/Footer.css"
import NavBar from './NavBar';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <div className="footermain">
                <NavBar />
                <div className="footercontent">
                    <h1 className="anim">Stock Photos</h1>
                    <p className="anim">Beautiful, free images and photos that you can download and use for any project. <br /> than any royalty free or stock photos.</p>
                    <div className="links anim">
                        <button><span></span>Free Images</button>
                        <button><span></span>Image API</button>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footerrow">
                    <div className="footercol">
                        <img src={logo} className="footer_logo" />
                        <p className="footer_about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore harum molestias nesciunt,
                            doloremque magni aspernatur iste blanditiis, fugiat quaerat accusamus ut, vero tempore.
                            Fugiat, illum!
                        </p>
                    </div>
                    <div className="footercol">
                        <h5>Office <div className="bottom_line"><span></span></div></h5>
                        <p>2841 Romines Mill Road</p>
                        <p>Plano</p>
                        <p>Texas, ZIP 75074, United States</p>
                        <p className="footer_email">alexastockphotos@gamil.com</p>
                        <h6>+1 - 2145958195</h6>
                    </div>
                    <div className="footercol">
                        <h5>Links <div className="bottom_line"><span></span></div></h5>
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">ABOUT</a></li>
                            <li><a href="">SERVICE</a></li>
                            <li><a href="">CONTACT US</a></li>
                        </ul>
                    </div>
                    <div className="footercol">
                        <h5>Newsletter <div className="bottom_line"><span></span></div></h5>
                        <form>
                            <i className="fa-regular fa-envelope"></i>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit"><i className="fa-solid fa-arrow-right" style={{ color: "#ffffff" }}></i></button>
                        </form>
                        <div className="social_icons">
                            <i className="fa-brands fa-square-facebook social_icon" style={{ color: "#ffffff" }}></i>
                            <i className="fa-brands fa-whatsapp social_icon" style={{ color: "#ffffff" }}></i>
                            <i className="fa-brands fa-twitter social_icon" style={{ color: "#ffffff" }}></i>
                            <i className="fa-brands fa-instagram social_icon" style={{ color: "#ffffff" }}></i>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="copyright">Cosas Learning Ⓒ {year} - All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Footer
