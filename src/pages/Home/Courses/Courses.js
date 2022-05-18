import React, { useEffect, useState } from 'react'
import useCourses from '../../../Hooks/useCourses'
import Loading from '../../Loading/Loading';

function Courses() {
  const [courses, loading, error, course_prod] = useCourses([])
  console.log(course_prod)
  if(loading){
    return(<Loading></Loading>)
  }
  return (
    <div>
      {courses.course_prod.map(product=><p>{product._id}</p>)}
      </div>
  )
}

export default Courses