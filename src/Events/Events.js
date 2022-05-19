import React from 'react'
import ContactUs from '../pages/ContactUs/ContactUs'
import './Events.css'

function Events() {
  return (
    <div>
        <h1 className='events-title'>Events</h1>
        <div className='events-section'>
            <p>DON'T MISS OUT</p>
            <h2>Upcoming Events</h2>
            <p>Coming Soon</p>
            <button className='events-view-all-btn'>View All</button>
        </div>
        <ContactUs></ContactUs>
    </div>
  )
}

export default Events