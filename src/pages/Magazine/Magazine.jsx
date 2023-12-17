import React from 'react'
import "./magazine.css"
import EventGallery from '../../components/EventGallery/EventGallery'

const Magazine = () => {

  const dummyMagazineData = [
    {
      id: 1,
      title: "Exciting Events in the Tech World",
      mainPhoto: "http://localhost:3000/img/photos/deneme.jpg",
      url: "https://example.com/magazine1",
    },
    {
      id: 2,
      title: "Innovation Unleashed: The Latest in Science",
      mainPhoto: "http://localhost:3000/img/photos/deneme.jpg",
      url: "https://example.com/magazine2",
    },
    {
      id: 3,
      title: "Discovering New Horizons in Space Exploration",
      mainPhoto: "http://localhost:3000/img/photos/deneme.jpg",
      url: "https://example.com/magazine3",
    },
    {
      id: 4,
      title: "Space Exploration",
      mainPhoto: "http://localhost:3000/img/photos/deneme.jpg",
      url: "https://example.com/magazine3",
    },
    // Add more entries as needed
  ];
  
  return (
    <div>
      <div>
      
      <div className='left-card'>
        <div className="title"><h1>Dergilerimiz</h1> <hr /></div>
      </div>
      <EventGallery events={dummyMagazineData} />
    </div>
    </div>
  )
}

export default Magazine