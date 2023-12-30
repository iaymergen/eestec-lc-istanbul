import React from 'react';
import '../EventCard/EventCard.css';
import { Link } from 'react-router-dom';

const MagazineCard = ({id, title, mainPhoto }) => (
  <Link to={`/magazines/${id}`} className='event-card-link'>
    <div className='event-card'>
      <img src={mainPhoto} alt={`Event`} className='event-photo' />
      <div className='event-details'>
        <h3 className='event-title'>{title}</h3>
      </div>
    </div>
  </Link>
);

export default MagazineCard;
