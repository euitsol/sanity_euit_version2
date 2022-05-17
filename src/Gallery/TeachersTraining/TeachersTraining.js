import React from 'react'
import './TeachersTraining.css'
import photo from '../../images/dummy-image.jpg'

function TeachersTraining() {
  return (
    <div>
        <h1 className='teachers-training-title'>Teachers Training</h1>
        <div className='teachers-training'>
          <div>
            <p>Teachers Training for Virtual Meeting & Classroom at Kishoreganj Polytechnic Institute</p>
            <h2>2020</h2>
          </div>
          <div className='image-gallary'>
            <img src={photo} alt='Teachers Training'></img>
            <img src={photo} alt='Teachers Training'></img>
            <img src={photo} alt='Teachers Training'></img>
            <img src={photo} alt='Teachers Training'></img>
            <img src={photo} alt='Teachers Training'></img>
            <img src={photo} alt='Teachers Training'></img>
          </div>
        </div>
    </div>
  )
}

export default TeachersTraining