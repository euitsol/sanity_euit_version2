import React from 'react'
import './FarewellProgramme.css'
import photo1 from '../../images/farewell-programme/European-IT-Farewell-Programme-2019-Abdullah-Al-Reza.jpg'
import photo2 from '../../images/farewell-programme/European-IT-Farewell-Programme-2019-Graphic-Design-Batch.jpg'
import photo3 from '../../images/farewell-programme/European-IT-Farewell-Programme-2019-Managing-Director-Mamun-Ur-Rasid.jpg'
import photo4 from '../../images/farewell-programme/European-IT-Farewell-Programme-2019-Mentors-with-success-students.jpg'
import photo5 from '../../images/farewell-programme/European-IT-Farewell-Programme-2019-Students-with-mentors.jpg'
import photo6 from '../../images/farewell-programme/European-IT-Farewell-Programme-2019-Students.jpg'

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
            <img src={photo1} alt='Farewell Programme'></img>
            <img src={photo2} alt='Farewell Programme'></img>
            <img src={photo3} alt='Farewell Programme'></img>
            <img src={photo4} alt='Farewell Programme'></img>
            <img src={photo5} alt='Farewell Programme'></img>
            <img src={photo6} alt='Farewell Programme'></img>
          </div>
        </div>
    </div>
  )
}

export default FarewellProgramme