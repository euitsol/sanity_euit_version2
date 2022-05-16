import { faBaby, faClockRotateLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './Facility.css'

function Facility(props) {
    const { icon, title, details } = props.facility;
  return (
      <div className='facility'>
          <FontAwesomeIcon icon={faClockRotateLeft} />
          <h2 className='facility-title'>{title}</h2>
          <p className='facility-detail'>{details }</p>
    </div>
  )
}

export default Facility