import React from 'react';
import './EventCard.css';

const EventCard = ({ title, mainPhoto }) => (
  <div className='event-card'>
    <img src={mainPhoto} alt={`Event`} className='event-photo' />
    <div className='event-details'>
      <h3 className='event-title'>{title}</h3>
    </div>
  </div>
);

export default EventCard;
