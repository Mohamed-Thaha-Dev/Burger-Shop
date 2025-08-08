import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer_content">
        <div className="footer_content_left">
                <img src={assets.logo} alt=""  style={{width:"100px",height:"100px",objectFit:"cover"}}/>
                <p>At Eat Vibe, we’re passionate about serving fresh, flavorful meals made with love. Whether you're craving burgers, pizzas, or refreshing drinks, we deliver happiness right to your plate. Join thousands who trust us for quick service and mouth-watering food.</p>
                <div className="footer_social_icon">
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
        </div>
        <div className="footer_content_right">
                    <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer_content_center">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 8974392170</li>
                    <li>support@eatvibe.com</li>
                    <li>Chennai, Tamil Nadu, India</li>
                </ul>
        </div>
        </div> 
        <hr/>
        <p className='footer_copy_rights'> Copyright 2025 ©️ Eatvibe.com - All Right Reserved </p>

    </div>
  )
}

export default Footer