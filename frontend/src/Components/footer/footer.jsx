import React from 'react'
import './footer.css'
import Logo from '../Assets/F_logo.png'
import Facebook from '../Assets/facebook.png'
import Instagram from '../Assets/instagram.png'
import Pinterest from '../Assets/pinterest.png'
import Whatsapp from '../Assets/whatsapp.png'

const footer = () => {
  return (
    <div className="FooterContainer">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="details">
            <ul>
                <li>Company</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="social-media">
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Pinterest} alt="" />
            <img src={Whatsapp} alt="" />
        </div>
        <hr />
        <p>Copyright @ 2023 - All Rights Reserved </p>
    </div>
  )
}

export default footer