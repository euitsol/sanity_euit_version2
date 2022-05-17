import React from 'react'
import './JobFair.css'
import photo1 from '../../images/job-fair/European-IT-Job-Fair-Programme-10.jpg'
import photo2 from '../../images/job-fair/European-IT-Job-Fair-Programme-6.jpg'
import photo3 from '../../images/job-fair/European-IT-Job-Fair-Programme-9.jpg'

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
            <img src={photo1} alt='Job fair'></img>
            <img src={photo2} alt='Job fair'></img>
            <img src={photo3} alt='Job fair'></img>
          </div>
        </div>
    </div>
  )
}

export default JobFair