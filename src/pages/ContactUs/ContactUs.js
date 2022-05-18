import { faClock, faEnvelope, faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='contact-us-container'>
          <div className="address">
              <FontAwesomeIcon className='icon' icon={faLocationDot}></FontAwesomeIcon>
              <h3 className='heading'>Address</h3>
              <p>Your address here</p>
          </div>
          <div className="callus">
              <FontAwesomeIcon className='icon' icon={faMobileScreenButton}></FontAwesomeIcon>
              <h3 className='heading'>Call Us</h3>
              <p>Your number here</p>
              <p>Your number here</p>
              <p>Your number here</p>
          </div>
          <div className="mail">
              <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
              <h3 className='heading'>Email</h3>
              <p>Your email here</p>
              <p>Your email here</p>

          </div>
          <div className="work-hour">
              <FontAwesomeIcon className='icon' icon={faClock}></FontAwesomeIcon>
              <h3 className='heading'>Work Hours</h3>
              <p>Monday - Sunday 10AM - 09PM</p>
          </div>
    </div>
  )
}

export default ContactUs