import React from 'react'
import './AnnualTour.css'
import image from '../../images/dummy-image.jpg'

function AnnualTour() {
  return (
    <div>
        <h1 className='annual-tour-title'>Annual Tour</h1>
        <div className='annual-tour'>
          <div>
            <p>Saint martin</p>
            <h2>2021</h2>
          </div>
          <div className='image-gallary'>
            <img src={image} alt='saint martin tour'></img>
            <img src={image} alt='saint martin tour'></img>
            <img src={image} alt='saint martin tour'></img>
          </div>
        </div>
    </div>
  )
}

export default AnnualTour