import { faAngleRight, faAward, faBookmark, faCalendarWeek, faChartColumn, faClock, faFilm, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useParams } from 'react-router-dom'
import useCourseDetails from '../../Hooks/useCourseDetails'
import ContactUs from '../ContactUs/ContactUs'
import Loading from '../Loading/Loading'
import './CourseDetails.css'

function CourseDetails() {
    const {slug} = useParams()
    const [courseDetails, loading, error, course_prod] = useCourseDetails(slug)
    const options = courseDetails?.course_prod;

    const courseModule = options[0]?.course_module;
    const topics = options[0]?.topics;
    const softwareTaught = options[0]?.software_taught;
    const highlight = options[0]?.highlight;
    const careerSupport = options[0]?.career_support;
    const courseImage = options[0]?.image?.asset?.url;

    if(loading){
      return(<Loading></Loading>)
    }


  return (
    <div>
      <h1 className='course-details-title'>{courseDetails?.course_prod[0]?.course_name}</h1>  
      <div className='course-details-container'>
        <div className='course-details'>
          <div className='overview'>
            <h1>overview</h1>
            <p>{options[0]?.overview}</p>
          </div>
          <div className='details'>
          <div className='left'>

            {/* modules section */}

            <div className='detail'>
              <h1>Modules</h1>
              {
                courseModule?.map(module=><p key={module}><FontAwesomeIcon className='arrow-icon' icon={faAngleRight}></FontAwesomeIcon>{module}</p>)
              }
             
            </div>

            {/* highlight Section */}

            <div className='detail'>
              <h1>Highlight</h1>
              {
                highlight?.map(highligt=><p key={highlight}><FontAwesomeIcon className='arrow-icon' icon={faAngleRight}></FontAwesomeIcon>{highligt}</p>)
              }
              
            </div>
            </div>
            <div className='right'>

            {/* topics section */}

            <div className='detail'>
              <h1>Topics</h1>
              {
                topics?.map(topic=><p key={topic}><FontAwesomeIcon className='arrow-icon' icon={faAngleRight}></FontAwesomeIcon>{topic}</p>)
              }
            </div>

            {/* software taught section */}

            <div className='detail'>
              <h1>Software Taught</h1>
              {
                softwareTaught?.map(softwareTaugt=><p key={softwareTaugt}><FontAwesomeIcon className='arrow-icon' icon={faAngleRight}></FontAwesomeIcon>{softwareTaugt}</p>)
              }
            </div>

            {/* career support section */}

            <div className='detail'>
              <h1>Career Support</h1>
              {
                careerSupport?.map(careersprt=><p key={careersprt}><FontAwesomeIcon className='arrow-icon' icon={faAngleRight}></FontAwesomeIcon>{careersprt}</p>)
              }
            </div>
            </div>
          </div>
        </div>
        <div className='cart-section'>

          {/* add to cart section */}

          <div className='add-to-cart'>
            <img src={courseImage?courseImage:''} alt='european it'></img>
            <div className='cart-details'>
              <h3 className='course-price'>$9000</h3>
              <button className='add-to-cart-btn'>Add to Cart</button>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faChartColumn}></FontAwesomeIcon>Skill Level: Beginner</p>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faClock}></FontAwesomeIcon>Duration: 02 hours</p>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faCalendarWeek}></FontAwesomeIcon>Class Per Week: 2 Days</p>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faBookmark}></FontAwesomeIcon>Total Class: 32</p>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faGlobe}></FontAwesomeIcon>Language: Bangla & English</p>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faAward}></FontAwesomeIcon>Certificate: Yes</p>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faFilm}></FontAwesomeIcon>Provide Class Video</p>
            </div>
          </div>

          {/* working hours */}

          <div className='working-hours'>
            working hours
          </div>
        </div>
      </div>
      <ContactUs></ContactUs>
    </div>
  )
}

export default CourseDetails