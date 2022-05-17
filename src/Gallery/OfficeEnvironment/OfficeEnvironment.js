import React from 'react'
import './OfficeEnvironment.css'
import photo from '../../images/dummy-image.jpg'

function OfficeEnvironment() {
  return (
    <div>
        <h1 className='office-environment-title'>Office environment</h1>
        <div className='office-environment'>
          <div className='image-gallary'>
            <img src={photo} alt='office-environment'></img>
            <img src={photo} alt='office-environment'></img>
            <img src={photo} alt='office-environment'></img>
            <img src={photo} alt='office-environment'></img>
            <img src={photo} alt='office-environment'></img>
            <img src={photo} alt='office-environment'></img>
          </div>
        </div>
    </div>
  )
}

export default OfficeEnvironment