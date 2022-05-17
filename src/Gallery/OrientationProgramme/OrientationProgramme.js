import React from 'react'
import './OrientationProgramme.css'
import photo from '../../images/dummy-image.jpg'

function OrientationProgramme() {
  return (
    <div>
        <h1 className='orientation-programme-title'>Orientation Programme</h1>
        <div className='orientation-programme'>
          <div>
            <p>Orientation Programme</p>
            <h2>2022</h2>
          </div>
          <div className='image-gallary'>
            <img src={photo} alt='Orientation Programme'></img>
            <img src={photo} alt='Orientation Programme'></img>
            <img src={photo} alt='Orientation Programme'></img>
            <img src={photo} alt='Orientation Programme'></img>
            <img src={photo} alt='Orientation Programme'></img>
            <img src={photo} alt='Orientation Programme'></img>
          </div>
        </div>
    </div>
  )
}

export default OrientationProgramme