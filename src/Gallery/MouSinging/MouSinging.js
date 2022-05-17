import React from 'react'
import './MouSinging.css'
import photo1 from '../../images/mou-singing-ceremony/European-IT-MOU-Signing-Ceremony--scaled.jpg'
import photo2 from '../../images/mou-singing-ceremony/European-IT-MOU-Signing-Ceremony-Graphic-design-institute-meating-room-2048x1365.jpg'
import photo3 from '../../images/mou-singing-ceremony/European-IT-MOU-Signing-Ceremony-receive-award-scaled.jpg'

function MouSinging() {
  return (
    <div>
        <h1 className='mou-singing-title'>MoU Signing Ceremony</h1>
        <div className='mou-singing'>
          <div>
            <p>MoU Signing Ceremony Between Graphic Art`s Institute and European it solutions & Institute</p>
          </div>
          <div className='image-gallary'>
            <img src={photo1} alt='MoU Signing Ceremony'></img>
            <img src={photo2} alt='MoU Signing Ceremony'></img>
            <img src={photo3} alt='MoU Signing Ceremony'></img>
          </div>
        </div>
    </div>
  )
}

export default MouSinging