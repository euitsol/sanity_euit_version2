import React from 'react'
import './OfficeEnvironment.css'
import photo1 from '../../images/office-environment/European-IT-Development-Zoon-Office-Environment.jpg'
import photo2 from '../../images/office-environment/European-IT-Lab-Room-Web-Design-and-Development-Class-17-1024x658-1.jpg'
import photo3 from '../../images/office-environment/European-IT-Prayer-Room.jpg'
import photo4 from '../../images/office-environment/European-IT-Reception-Desk-3-1024x658-1.jpg'
import photo5 from '../../images/office-environment/European-IT-Waiting-Room-5-1024x658-1.jpg'
import photo6 from '../../images/office-environment/gallery-thambnail.jpg'

function OfficeEnvironment() {
  return (
    <div>
        <h1 className='office-environment-title'>Office environment</h1>
        <div className='office-environment'>
          <div className='image-gallary'>
            <img src={photo1} alt='office-environment'></img>
            <img src={photo2} alt='office-environment'></img>
            <img src={photo3} alt='office-environment'></img>
            <img src={photo4} alt='office-environment'></img>
            <img src={photo5} alt='office-environment'></img>
            <img src={photo6} alt='office-environment'></img>
          </div>
        </div>
    </div>
  )
}

export default OfficeEnvironment