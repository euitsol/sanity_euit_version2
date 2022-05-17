import React from 'react'
import './JobFair.css'
import photo from '../../images/dummy-image.jpg'

function JobFair() {
  return (
    <div>
        <h1 className='job-fair-title'>Job Fair</h1>
        <div className='job-fair'>
          <div>
            <p>Job fair Programme</p>
            <h2>2020</h2>
          </div>
          <div className='image-gallary'>
            <img src={photo} alt='Job fair'></img>
            <img src={photo} alt='Job fair'></img>
            <img src={photo} alt='Job fair'></img>
          </div>
        </div>
    </div>
  )
}

export default JobFair