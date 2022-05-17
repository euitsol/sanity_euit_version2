import React from 'react'
import './AnnualTour.css'
import photo1 from '../../images/annual-tour/European-IT-Annual-Tour-Saint-Martin-2020-CheraDip-2048x1366.jpg'
import photo2 from '../../images/annual-tour/European-IT-Annual-Tour-Saint-Martin-2020-Memorable-Day-2048x1366.jpg'
import photo3 from '../../images/annual-tour/European-IT-Annual-Tour-Saint-Martin-2020-Team-with-Director-Sir.jpg'

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
            <img src={photo1} alt='saint martin tour'></img>
            <img src={photo2} alt='saint martin tour'></img>
            <img src={photo3} alt='saint martin tour'></img>
          </div>
        </div>
    </div>
  )
}

export default AnnualTour