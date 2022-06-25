import { faAngleRight, faAward, faBookmark, faCalendarWeek, faChartColumn, faClock, faFilm, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCourseDetails from '../../Hooks/useCourseDetails'
import { addToDb } from '../../utilities/localstorage';
import ContactUs from '../ContactUs/ContactUs'
import Loading from '../Loading/Loading'
import './CourseDetails.css'

function CourseDetails() {
    const {slug} = useParams()
    const [courseDetails, loading, error, course_prod] = useCourseDetails(slug);
    const options = courseDetails?.course_prod[0];

    const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const workingTimes = '10:00 am - 9:00 pm';

    // add to cart functionality
    const addToCart = (slug)=>{
      console.log(slug)
      toast(course_prod[0]?.course_name+" Added to cart");
      addToDb(slug)
    }

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

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
            <p>{options?.overview}</p>
          </div>
          <div className='details'>
          <div className='left'>

            {/* modules section */}

            <div className='detail'>
              <h1>Modules</h1>
              {
                options.course_module?.map((module, i)=><p key={i}><FontAwesomeIcon className='arrow-icon' icon={faAngleRight}></FontAwesomeIcon>{module}</p>)
              }
             
            </div>

            {/* highlight Section */}

            <div className='detail'>
              <h1>Highlight</h1>
              {
                options.highlight?.map((highligt, i)=><p key={i}><FontAwesomeIcon className='arrow-icon' icon={faAngleRight}></FontAwesomeIcon>{highligt}</p>)
              }
              
            </div>
            </div>
            <div className='right'>

            {/* topics section */}

            <div className='detail'>
              <h1>Topics</h1>
              {
                options.topics?.map((topic, i)=><p key={i}><FontAwesomeIcon className='arrow-icon' icon={faAngleRight}></FontAwesomeIcon>{topic}</p>)
              }
            </div>

            {/* software taught section */}

            <div className='detail'>
              <h1>Software Taught</h1>
              {
                options.software_taught?.map((softwareTaugt, i)=><p key={i}><FontAwesomeIcon className='arrow-icon' icon={faAngleRight}></FontAwesomeIcon>{softwareTaugt}</p>)
              }
            </div>

            {/* career support section */}

            <div className='detail'>
              <h1>Career Support</h1>
              {
                options.career_support?.map((careersprt, i)=><p key={i}><FontAwesomeIcon className='arrow-icon' icon={faAngleRight}></FontAwesomeIcon>{careersprt}</p>)
              }
            </div>
            </div>
          </div>
        </div>
        <div className='cart-section'>

          {/* add to cart section */}

          <div className='add-to-cart'>
            <img src={options.image.asset.url} alt='european it'></img>
            <div className='cart-details'>
              <h3 className='course-price'>${options.course_price}</h3>
              <button className='add-to-cart-btn' onClick={()=>addToCart(slug)}>Add to Cart</button>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faChartColumn}></FontAwesomeIcon>Skill Level: Beginner</p>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faClock}></FontAwesomeIcon>Duration: 02 hours</p>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faCalendarWeek}></FontAwesomeIcon>Class Per Week: 2 Days</p>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faBookmark}></FontAwesomeIcon>Total Class: 32</p>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faGlobe}></FontAwesomeIcon>Language: English</p>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faAward}></FontAwesomeIcon>Certificate: Yes</p>
              <p className='add-to-cart-info'><FontAwesomeIcon className='icon' icon={faFilm}></FontAwesomeIcon>Provide Class Video</p>
            </div>
          </div>

          {/* working hours */}

          <div className='working-hours'>
            <div className='working-hours-title'>working hours</div>
            <div className='days-times'>
              <div className='days'>
                {
                  workingDays.map((days, index)=> <div
                    key={index}
                    className='days-hours'
                  >
                    <p>{days}</p>
                    <p>{workingTimes}</p>
                  </div>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs></ContactUs>
      <ToastContainer />
    </div>
  )
}

export default CourseDetails