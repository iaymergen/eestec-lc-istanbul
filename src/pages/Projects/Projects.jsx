import React from 'react'
import "./projects.css"
import EventGallery from '../../components/EventGallery/EventGallery'
const Projects = () => {

  const dummyEvents = [
    {
      title: 'Event 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      mainPhoto: 'http://localhost:3000/img/photos/deneme.jpg',
      photos: [
        'https://example.com/event1_photo1.jpg',
        'https://example.com/event1_photo2.jpg',
        'https://example.com/event1_photo3.jpg',
      ],
      sponsors: ['Sponsor A', 'Sponsor B', 'Sponsor C'],
    },
    {
      title: 'Event 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      mainPhoto: 'http://localhost:3000/img/photos/deneme.jpg',
      photos: [
        'https://example.com/event2_photo1.jpg',
        'https://example.com/event2_photo2.jpg',
        'https://example.com/event2_photo3.jpg',
      ],
      sponsors: ['Sponsor X', 'Sponsor Y', 'Sponsor Z'],
    },
    {
      title: 'Event 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      mainPhoto: 'http://localhost:3000/img/photos/deneme.jpg',
      photos: [
        'https://example.com/event3_photo1.jpg',
        'https://example.com/event3_photo2.jpg',
        'https://example.com/event3_photo3.jpg',
      ],
      sponsors: ['Sponsor P', 'Sponsor Q', 'Sponsor R'],
    },
    {
      title: 'Event 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      mainPhoto: 'http://localhost:3000/img/photos/deneme.jpg',
      photos: [
        'https://example.com/event1_photo1.jpg',
        'https://example.com/event1_photo2.jpg',
        'https://example.com/event1_photo3.jpg',
      ],
      sponsors: ['Sponsor A', 'Sponsor B', 'Sponsor C'],
    },
    {
      title: 'Event 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      mainPhoto: 'http://localhost:3000/img/photos/deneme.jpg',
      photos: [
        'https://example.com/event1_photo1.jpg',
        'https://example.com/event1_photo2.jpg',
        'https://example.com/event1_photo3.jpg',
      ],
      sponsors: ['Sponsor A', 'Sponsor B', 'Sponsor C'],
    },
    
  ];



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