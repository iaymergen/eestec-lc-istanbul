import React from 'react'
import "./projects.css"
import dummyEvents from '../../data/dummyEvents';
import EventGallery from '../../components/EventGallery/EventGallery'
const Projects = () => {

  return (
    <div>
      
      <div className='left-card'>
        <div className="title"><h1>Etkinliklerimiz</h1> <hr /></div>
      </div>
      <EventGallery events={dummyEvents} />
    </div>
  )
}

export default Projects