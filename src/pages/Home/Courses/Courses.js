import React from 'react'
import useCourses from '../../../Hooks/useCourses'
import Loading from '../../Loading/Loading';
import SingleCourseDesign from '../SingleCourseDesign/SingleCourseDesign'
import './Courses.css'

function Courses() {
  const [courses, loading, error, course_prod] = useCourses([])
  if(loading){
    return(<Loading></Loading>)
  }
  return (
    <div className='courses-container'>
          <div className="title">
            <p className='popular-text'>MOST POPULAR</p>
            <h1 className='course-program-text'>Course Programs</h1>
          </div>
          <div className="cards">
              {
                courses.course_prod.map((course, i) => <SingleCourseDesign key={i} course={course}></SingleCourseDesign>)
              }
          </div>

    </div>
  )
}

export default Courses