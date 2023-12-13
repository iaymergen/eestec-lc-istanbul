// PhotoGallery.js

import React, { useState } from 'react';
import './PhotoGallery.css';

const PhotoGallery = ({ photos, photosPerPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + photosPerPage) % photos.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - photosPerPage + photos.length) % photos.length);
  };

  return (
    <div className="photo-gallery">
      <div className="photos-container">
        {photos.slice(currentIndex, currentIndex + photosPerPage).map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index + 1}`} className="gallery-photo" />
        ))}
      </div>
      <button onClick={handlePrevClick} className="arrow-button prev">&lt;</button>
      <button onClick={handleNextClick} className="arrow-button next">&gt;</button>
    </div>
  );
};

export default PhotoGallery;
