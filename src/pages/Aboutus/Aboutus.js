import React from 'react'
import aboutUs from '../../images/About-Us-Image.jpg'
import './Aboutus.css'
import mamunImage from '../../images/Mamun-Ur-Rashid.png'
import sandeepImage from '../../images/SANDEEP_CHOWDHURY.png'

function Aboutus() {
  return (
    <div>
        <h1 className='about-us-title'>About Us</h1>
        <div className='about-us-img'>
            <img src={aboutUs} alt=''></img>
        </div>
        <div className='welcome-message'>
            <h3>WELCOME TO</h3>
            <h1>About European IT Institute</h1>
            <p>European IT started off as an IT and web-based solutions, services and web design company in Ireland, Germany, and Bangladesh in 2009. Over the years, European IT has delivered successful projects in multiple platforms to clients in the US, Canada, UK, Ireland, Norway, Belgium, Netherlands, Bangladesh, Australia to name a few countries. The founders decided to set up European IT Institute in 2015 to provide professional IT training along with IT Skill Enhancement Training Program with the outsourcing market for graduates in view to gain work that follows international standards and quality. Additionally, European IT Institute offers training delivery solutions to corporations, institutions, and individuals along with internship for graduates.</p>
        </div>
        <div className='founder-section'>
            <div className='card'>
                <div className='founder-img'>
                    <img src={mamunImage} alt='mamun sir'></img>
                </div>
                <div className='founder-info'>
                    <h1 className='founder-name'>Md. Mamun Ur Rasid</h1>
                    <h2 className='role'>Co-Founder & MD</h2>
                    <h3 className='institute'>European IT Solutions & Institute</h3>
                </div>
            </div>
            <div className='card'>
                <div className='founder-img'>
                    <img src={sandeepImage} alt='sandeep sir'></img>
                </div>
                <div className='founder-info'>
                    <h1 className='founder-name'>Md. Mamun Ur Rasid</h1>
                    <h2 className='role'>Co-Founder & MD</h2>
                    <h3 className='institute'>European IT Solutions & Institute</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus