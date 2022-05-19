import { faGraduationCap, faPeopleGroup, faStamp, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Home.css'
import eidofferimg from '../../../images/website-banner-eid-offer----Copy.png'
import Welcome from '../../../Welcome/Welcome'
import ContactUs from '../../ContactUs/ContactUs'
import Facilities from '../../../Facilities/Facilities'
import Courses from '../Courses/Courses'
import OurPartner from '../../../OurPartners/OurPartners'
import JobPLacement from '../../../JobPlacement/JobPLacement'
import CareerCouncelling from '../../../CareerCouncelling/CareerCouncelling'

function Home() {
  return (
    <div>
      {/* banner section */}
        <div className='banner'>
            <img src={eidofferimg} alt='eid banner'></img>
        </div>
        {/* banner bottom section */}
        <div className='services-container'>
          <div className='card'>
              <FontAwesomeIcon className='icon' icon={faStamp} />
              <h3>6 months/ 1 Year Diploma Course</h3>
          </div>
          <div className='card'>
              <FontAwesomeIcon className='icon' icon={faPeopleGroup}></FontAwesomeIcon>
              <h3>Apply for Free Seminar</h3>
          </div>
          <div className='card'>
              <FontAwesomeIcon className='icon' icon={faTv}></FontAwesomeIcon>
              <h3>Free Online Tutorials</h3>
          </div>
          <div className='card'>
              <FontAwesomeIcon className='icon' icon={faGraduationCap}></FontAwesomeIcon>
              <h3>Apply for New Courses</h3>
          </div>
        </div>
        <Welcome></Welcome>
        <Courses></Courses>
        <Facilities></Facilities>
        <JobPLacement></JobPLacement>
        <CareerCouncelling></CareerCouncelling>
        <OurPartner></OurPartner>
        <ContactUs></ContactUs>
    </div>
  )
}

export default Home