import React from 'react'
import useFacilities from '../Hooks/useFacilities'
import Facility from './Facility'
import './Facilities.css'

function Facilities() {
    const [facilities] = useFacilities([])
    return (
      <div className="facilities">
            <p className='facilities-title'>European It</p>
            <h1 className='facilities-text'>Facilities</h1>
            <div className='facility-container'>
                {facilities.map((facility, i) => <Facility key={i} facility={facility}></Facility>)}
            </div>
      </div>
  )
}

export default Facilities