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
                      <p>here your phone number</p>
                      <p>here your phone number</p>
                  </div>
              </div>
              {/* email section */}
              <div className="mail-section">
                  <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
                  <div className="mail">
                      <p>here your email</p>
                      <p>here your email</p>
                  </div>
              </div>
              <div className="basis-logo">
                  <img src="https://europeanit-inst.com/wp-content/uploads/2020/02/basis-logo.svg" alt="basis" title='European It partner- Basis' />
              </div>
          </div>
      </div>
  )
}

export default Header