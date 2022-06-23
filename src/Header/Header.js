import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
          <div className='header-top'>
              {/* logo of institute */}
              <div className="logo">
                  <Link to='/'><img src="https://europeanit-inst.com/wp-content/uploads/2020/02/logo-large-TM.png-300.png" alt="logo" /></Link>
              </div>
              {/* phone number section */}
              <div className="phone-number">
                  <FontAwesomeIcon className='icon' icon={faMobileAlt}></FontAwesomeIcon>
                  <div className="number">
                    <a href="tel:555123456789">0123456789</a>
                    <br></br>
                    <a href="tel:555123456789">0123456789</a>
                  </div>
              </div>
              {/* email section */}
              <div className="mail-section">
                  <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
                  <div className="mail">
                    <a href="mailto:my@email.com">my@email.com</a>
                    <br></br>
                    <a href="mailto:my@email.com">my@email.com</a>
                  </div>
              </div>
             
          </div>
      </div>
  )
}

export default Header