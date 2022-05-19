import React from 'react'
import './Aboutus.css'
import ceo from '../../images/images.jpg'
import Facilities from '../../Facilities/Facilities'
import Welcome from '../../Welcome/Welcome'
import ContactUs from '../ContactUs/ContactUs'

function Aboutus() {
  return (
    <div>
        <h1 className='about-us-title'>About Us</h1>
        <Welcome></Welcome>
        <div className='founder-section'>
            <div className='card'>
                <div className='founder-img'>
                    <img src={ceo} alt='ceo'></img>
                </div>
                <div className='founder-info'>
                    <p className='founder-name'>John Doe</p>
                    <p className='role'>Co-Founder & MD</p>
                    <h3 className='institute'>European IT Solutions & Institute</h3>
                </div>
            </div>
            <div className='card'>
                <div className='founder-img'>
                    <img src={ceo} alt='sandeep sir'></img>
                </div>
                <div className='founder-info'>
                    <p className='founder-name'>Smith</p>
                    <p className='role'>Founder</p>
                    <h3 className='institute'>European IT Solutions & Institute</h3>
                </div>
            </div>
        </div>
        <Facilities></Facilities>
        <ContactUs></ContactUs>
    </div>
  )
}

export default Aboutus