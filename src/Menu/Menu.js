import { faAngleDown, faAngleRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <nav>
      <div className="wrapper">
        <div className="menu">
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About Us</Link></li>
            <li>
              <a href="/" className="desktop-item">Courses <FontAwesomeIcon icon={faAngleDown} /></a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">Courses </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>DEVELOPMENT</header>
                    <ul className="mega-links">
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Web Design</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Web Design and Development</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Wordpress Theme Customization</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">OOP PHP & MySql</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Codeigniter Framework</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Laravel Framework</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">App Development</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Python Development</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>DESIGN</header>
                    <ul className="mega-links">
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Graphic Design</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">3D Animation</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">UI/UX Design</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Photography</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Motion Graphics</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Video Editing</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Networking</header>
                    <ul className="mega-links">
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Networking</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">MTCNA</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">CCNA</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">RHCSA/RHCE</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">AWS Solution Architecture Associate (SAA-CO2)</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>MARKETING & OTHERS</header>
                    <ul className="mega-links">
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Digital Marketing</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">SEO</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Communicative English</a></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Basic Computer</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/" className="desktop-item">Success Stories <FontAwesomeIcon icon={faAngleDown} /> </a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">Success Stories <FontAwesomeIcon icon={faAngleDown} /></label>
              <ul className="drop-menu">
                <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Student's Success</a></li>
                <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Professionals Expert Opinion</a></li>
                <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Written Feedback</a></li>
                <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><a href="/">Video Feedback</a></li>
              </ul>
            </li>

            <li><a href="/">Events</a></li>
            <li>
              <a href="/" className="desktop-item">Gallery<FontAwesomeIcon icon={faAngleDown} /></a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">Gallery <FontAwesomeIcon icon={faAngleDown} /></label>
              <ul className="drop-menu">
                <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/officeenvironment">Office Environment</Link></li>
                <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/orientation-programme">Orientation Programme</Link></li>
                <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/teachers-training">Teachers Training</Link></li>
                <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/farewell">Fearwell Programme</Link></li>
                <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/mousingingceremony">MoU Singing Ceremony</Link></li>
                <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/jobfair">Job Fair</Link></li>
                <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/seminar">Seminar</Link></li>
                <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to='/annual-tour'>Annual Tour</Link></li>
              </ul>
            </li>
            <li><a href="/">News</a></li>
            <li><a href="/">Contact us</a></li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
        </div>
      <button className='admission-now-btn'>Admission now</button>
      </div>
        </nav>
  )
}

export default Menu