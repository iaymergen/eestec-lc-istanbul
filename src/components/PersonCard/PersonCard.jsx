import React from 'react';
import './personCard.css';

const PersonCard = ({ person }) => {
    const { photo, name, title } = person;

    return (
        <div className='card-div'>
            <img src={photo} alt={name} className='person-photo' />
            <div className="person-info">
                <p className='person-name'>{name}</p>
                <p className='person-title'>{title}</p>
            </div>

        </div>
    );
};

export default PersonCard;
