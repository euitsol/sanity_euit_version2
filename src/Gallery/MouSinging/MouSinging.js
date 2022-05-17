import React from 'react'
import './MouSinging.css'
import photo from '../../images/dummy-image.jpg'

function MouSinging() {
  return (
    <div>
        <h1 className='mou-singing-title'>MoU Signing Ceremony</h1>
        <div className='mou-singing'>
          <div>
            <p>MoU Signing Ceremony Between Graphic Art`s Institute and European it solutions & Institute</p>
          </div>
          <div className='image-gallary'>
            <img src={photo} alt='MoU Signing Ceremony'></img>
            <img src={photo} alt='MoU Signing Ceremony'></img>
            <img src={photo} alt='MoU Signing Ceremony'></img>
          </div>
        </div>
    </div>
  )
}

export default MouSinging