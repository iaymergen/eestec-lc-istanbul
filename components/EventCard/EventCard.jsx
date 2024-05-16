import React from 'react';
import './EventCard.css';
import { Link } from 'react-router-dom';

const EventCard = ({id, title, mainPhoto }) => (
  <Link to={`/events/${id}`} className='event-card-link'>
    <div className='event-card'>
      <img src={mainPhoto} alt={`Event`} className='event-photo' />
      <div className='event-details'>
        <h3 className='event-title'>{title}</h3>
      </div>
    </div>
  </Link>
);

export default EventCard;
