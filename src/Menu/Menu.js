import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <nav>
      <div className="wrapper">
        <div className="menu">
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About Us</Link></li>
            <li>
              <a href="/" className="desktop-item">Courses</a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">Courses</label>
              <div className="mega-box">
                <div className="content">

                  <div className="row">
                    <header>DEVELOPMENT</header>
                    <ul className="mega-links">
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Web Design</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Web Design and Development</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Wordpress Theme Customization</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">OOP PHP & MySql</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Codeigniter Framework</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Laravel Framework</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">App Development</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Python Development</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>DESIGN</header>
                    <ul className="mega-links">
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Graphic Design</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">3D Animation</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">UI/UX Design</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Photography</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Motion Graphics</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Video Editing</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Networking</header>
                    <ul className="mega-links">
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Networking</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">MTCNA</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">CCNA</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">RHCSA/RHCE</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">AWS Solution Architecture Associate (SAA-CO2)</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>MARKETING & OTHERS</header>
                    <ul className="mega-links">
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Digital Marketing</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">SEO</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Communicative English</a></li>
                      <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Basic Computer</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/" className="desktop-item">Success Stories</a>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" className="mobile-item">Success Stories</label>
              <ul className="drop-menu">
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Student's Success</a></li>
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Professionals Expert Opinion</a></li>
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Written Feedback</a></li>
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Video Feedback</a></li>
              </ul>
            </li>

            <li><a href="/">Events</a></li>
            <li>
              <a href="/" className="desktop-item">Gallery</a>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" className="mobile-item">Gallery</label>
              <ul className="drop-menu">
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Office Environment</a></li>
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Orientation Programme</a></li>
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Teachers Training</a></li>
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Fearwell Programme</a></li>
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">MoU Singing Ceremony</a></li>
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Job Fair</a></li>
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Seminar</a></li>
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Annual Tour</a></li>
                <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="/">Falgun Events</a></li>
              </ul>
            </li>
            <li><a href="/">News</a></li>
            <li><a href="/">Contact us</a></li>
          </ul>
          <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
        </div>
      <button className='admission-now-btn'>Admission now</button>
      </div>
        </nav>
  )
}

export default Menu