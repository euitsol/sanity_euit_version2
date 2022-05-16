import React from 'react'
import './Facility.css'

function Facility(props) {
    const { icon, title, details } = props.facility;
  return (
      <div className='facility'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png" alt="" />
          <h2 className='facility-title'>{title}</h2>
          <p className='facility-detail'>{details }</p>
    </div>
  )
}

export default Facility