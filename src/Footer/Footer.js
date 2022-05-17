import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import yourjourney from '../images/your-journy-to.png'
import './Footer.css'

function Footer() {
  return (
    <div>
          <div className='footer-content'>
              <div className="logo">
                  <img src="https://europeanit-inst.com/wp-content/uploads/2020/02/logo-large-TM.png-300.png" alt="" />
              </div>
              <div className="follow-us">
                  <h2>Follow Us</h2>
                  <a href='#'><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                  <a href='#'><i className="fa-brands fa-twitter"></i></a>
              </div>
              <div className="motivate-speech">
                  <img src={yourjourney} alt="" />
              </div>
          </div>
          <div className='copy-text'>
              <p>Copyright ©2022 European IT Solutions Institute. All Rights Reserved.</p>
          </div>
    </div>
  )
}

export default Footer