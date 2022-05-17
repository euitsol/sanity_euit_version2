import React from 'react'
import './FarewellProgramme.css'
import photo from '../../images/dummy-image.jpg'

function FarewellProgramme() {
  return (
    <div>
        <h1 className='farewell-title'>Farewell Programme</h1>
        <div className='farewell'>
          <div>
            <p>Saint martin</p>
            <h2>2021</h2>
          </div>
          <div className='image-gallary'>
            <img src={photo} alt='Farewell Programme'></img>
            <img src={photo} alt='Farewell Programme'></img>
            <img src={photo} alt='Farewell Programme'></img>
            <img src={photo} alt='Farewell Programme'></img>
            <img src={photo} alt='Farewell Programme'></img>
            <img src={photo} alt='Farewell Programme'></img>
          </div>
        </div>
    </div>
  )
}

export default FarewellProgramme