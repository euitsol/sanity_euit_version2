import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Header.css'
import eidofferimg from '../../../images/euit-eid-offer.png'

function Header() {
  return (
    <div className="header">
          <div className='header-top'>
              <div className="logo">
                  <img src="https://europeanit-inst.com/wp-content/uploads/2020/02/logo-large-TM.png-300.png" alt="logo" />
              </div>
              <div className="phone-number">
                  <FontAwesomeIcon className='icon' icon={faMobileAlt}></FontAwesomeIcon>
                  <div className="number">
                      <p>+880 188 99 77 951</p>
                      <p>+880 188 99 77 952</p>
                  </div>
              </div>
              <div className="mail-section">
                  <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
                  <div className="mail">
                      <p>info@europeanit-inst.com</p>
                      <p>help@europeanit-inst.com</p>
                  </div>
              </div>
              <div className="basis-logo">
                  <img src="https://europeanit-inst.com/wp-content/uploads/2020/02/basis-logo.svg" alt="basis" title='European It partner- Basis' />
              </div>
          </div>
          <div className="menu-slider">
              {/* <div className="menu-bar">
                  <Menu></Menu>
              </div> */}
              <div className='banner'>
                  <img src={eidofferimg} alt=''></img>
              </div>

          </div>
      </div>
  )
}

export default Header