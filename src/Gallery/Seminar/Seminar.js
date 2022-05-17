import React from 'react'
import './Seminar.css'

import image from '../../images/dummy-image.jpg'

function Seminar() {
  return (
    <div>
        <h1 className='seminar-title'>Seminar</h1>
        <div className='seminar'>
          <div>
            <p>Seminar</p>
            <h2>lorem ipsum dolor sit amet</h2>
          </div>
          <div className='image-gallary'>
            <img src={image} alt='seminar'></img>
            <img src={image} alt='seminar'></img>
            <img src={image} alt='seminar'></img>
          </div>
        </div>
        <div className='seminar'>
          <div>
            <p>Seminar</p>
            <h2>lorem ipsum dolor sit amet</h2>
          </div>
          <div className='image-gallary'>
            <img src={image} alt='seminar'></img>
            <img src={image} alt='seminar'></img>
            <img src={image} alt='seminar'></img>
          </div>
        </div>
    </div>
  )
}

export default Seminar