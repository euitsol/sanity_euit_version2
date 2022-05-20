import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetails() {
    const {slug} = useParams()
  return (
    <div>CourseDetails {slug}</div>
  )
}

export default CourseDetails