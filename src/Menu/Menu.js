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
              <a href="/" className="desktop-item">Courses <FontAwesomeIcon className='arrow-right' icon={faAngleDown} /></a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">Courses </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>DEVELOPMENT</header>
                    <ul className="mega-links">
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/course/web-design">Web Design</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/course/web-design-and-development">Web Design and Development</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/course/wordpress-theme-customization">Wordpress Theme Customization</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">OOP PHP & MySql</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">Codeigniter Framework</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">Laravel Framework</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">App Development</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/course/python-development">Python Development</Link></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>DESIGN</header>
                    <ul className="mega-links">
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">Graphic Design</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">3D Animation</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">UI/UX Design</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">Photography</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">Motion Graphics</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">Video Editing</Link></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Networking</header>
                    <ul className="mega-links">
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">Networking</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">MTCNA</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">CCNA</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">RHCSA/RHCE</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">AWS Solution Architecture Associate (SAA-CO2)</Link></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>MARKETING & OTHERS</header>
                    <ul className="mega-links">
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">Digital Marketing</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">SEO</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">Communicative English</Link></li>
                      <li><FontAwesomeIcon className='right-arrow-icon' icon={faAngleRight}></FontAwesomeIcon><Link to="/">Basic Computer</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/" className="desktop-item">Success Stories <FontAwesomeIcon className='arrow-right' icon={faAngleDown} /> </a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">Success Stories <FontAwesomeIcon icon={faAngleDown} /></label>
              <ul className="drop-menu">
                <li className='succes-stories-item'><Link to="/">Student's Success</Link></li>
                <li className='succes-stories-item'><Link to="/">Professionals Expert Opinion</Link></li>
                <li className='succes-stories-item'><Link to="/">Written Feedback</Link></li>
                <li className='succes-stories-item'><Link to="/">Video Feedback</Link></li>
              </ul>
            </li>

            <li><Link to="/events">Events</Link></li>
            <li>
              <a href="/" className="desktop-item">Gallery<FontAwesomeIcon className='arrow-right' icon={faAngleDown} /></a>
              <input type="checkbox" id="gallery" />
              <label htmlFor="gallery" className="mobile-item">Gallery <FontAwesomeIcon icon={faAngleDown} /></label>
              <ul className="drop-menu">
                <li className='gallery-items'><Link to="/officeenvironment">Office Environment</Link></li>
                <li className='gallery-items'><Link to="/orientation-programme">Orientation Programme</Link></li>
                <li className='gallery-items'><Link to="/teachers-training">Teachers Training</Link></li>
                <li className='gallery-items'><Link to="/farewell">Fearwell Programme</Link></li>
                <li className='gallery-items'><Link to="/mousingingceremony">MoU Singing Ceremony</Link></li>
                <li className='gallery-items'><Link to="/jobfair">Job Fair</Link></li>
                <li className='gallery-items'><Link to="/seminar">Seminar</Link></li>
                <li className='gallery-items'><Link to='/annual-tour'>Annual Tour</Link></li>
              </ul>
            </li>
            <li><a href="/">News</a></li>
            <li><Link to="/contact-us">Contact us</Link></li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
        </div>
      <button className='admission-now-btn'><Link to='/admission-now' className='admission-now-btn-link'>Admission Now</Link></button>
      </div>
        </nav>
  )
}

export default Menu