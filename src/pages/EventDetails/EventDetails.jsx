import React from 'react';
import './EventDetails.css';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import EventGallery from '../../components/EventGallery/EventGallery';
import dummyEvents from '../../data/dummyEvents';
import { useParams } from 'react-router-dom'; // Import useParams

const EventDetails = () => {
  // Access the event ID from the URL params using useParams
  const { id } = useParams();

  // Fetch the event details based on the ID from your data (dummyEvents)
  const selectedEvent = dummyEvents.find(event => event.id === id);

  // Check if the event exists
  if (!selectedEvent) {
    return <div>Error: Event not found</div>;
  }

  const { title, description, photos, sponsors } = selectedEvent;

  return (
    <div className='page'>
      <div className='left-card'>
        <div className="title">
          <h1>{title}</h1>
          <hr />
        </div>
        <div className="content">
          <p>{description}</p>
        </div>
      </div>
      <div className='left-card'>
        <div className="title"><h1>Fotoğraflarımız</h1></div>

      </div>
      <PhotoGallery photos={photos} />
      <div className='left-card'>
        <div className="title"><h1>Sponsorlarımız</h1></div>

      </div>

      <PhotoGallery photos={sponsors} />
    </div>
  );
};

export default EventDetails;
