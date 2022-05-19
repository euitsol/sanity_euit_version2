import React from 'react'
import image from '../images/images.jpg'
import './JobPlacement.css'

function JobPLacement() {
  return (
    <div className='job-placement'>
          <div className="details">
              <p className='job'>Job</p>
              <h2 className='placement'>Placement</h2>
              <img src={image} alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <h1 className='name'>John Doe</h1>
              <p className='post'>Graphic Designer</p>
          </div>
          <div className='video'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nc5Lj90BzSQ?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
    </div>
  )
}

export default JobPLacement