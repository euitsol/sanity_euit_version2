import React from 'react'
import { Link } from 'react-router-dom';
import './SingleCourseDesign.css'

function SingleCourseDesign(props) {
    const {course_name, course_price, course_duration, total_class, image, slug } = props.course;
    const courseImage = image.asset.url;

  return (
    <Link to={`/course/${slug.current}`}>
      <div className='card'>
        <img src={courseImage} alt="" />
        <div className="info">
            <p className='course-price'>${course_price}</p>
            <h2 className='course-name'>{course_name }</h2>
        </div>
        <div className='totalclass-duration'>
            <p className='total-class'>Total Class: {total_class}</p>
            <p className='duration'>Duration: {course_duration} hours</p>
        </div>
    </div>
    </Link>
    
  )
}

export default SingleCourseDesign