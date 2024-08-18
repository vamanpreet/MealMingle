import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo_footer} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quibusdam repellendus error cumque fugit, voluptatem soluta qui at rerum temporibus officia nobis magni nihil dolorum minima excepturi? Est, sed officiis!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-546-4389</li>
                        <li>contact@mealmingle.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">&copy; Copyright 2024 @ MealMingle.com - All Right Reserved</div>
        </div>
    )
}

export default Footer