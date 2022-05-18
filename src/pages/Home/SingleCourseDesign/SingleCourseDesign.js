import React from 'react'
import './SingleCourseDesign.css'

function SingleCourseDesign(props) {
    console.log(props.course.image.asset.url)
    const {_id, course_name, course_price, course_duration, total_class } = props.course;
    const image = props.course.image.asset.url;
    console.log(image)
  return (
    <div className='card'>
        <img src={image} alt="" />
        <div className="info">
            <p className='course-price'>${course_price}</p>
            <h2 className='course-name'>{course_name }</h2>
        </div>
        <div className='totalclass-duration'>
            <p>Total Class: {total_class}</p>
            <p>Duration: {course_duration} hours</p>
        </div>
    </div>
    
  )
}

export default SingleCourseDesign