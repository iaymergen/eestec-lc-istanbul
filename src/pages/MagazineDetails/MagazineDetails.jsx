// src/components/MagazineDetails/MagazineDetails.js
import React from 'react';
import './MagazineDetails.css';
import dummyMagazine from '../../data/dummyMagazine';
import { useParams } from 'react-router-dom'; 
import FlipBook from '../../components/FlipBook/FlipBook'; // Update the path

const MagazineDetails = () => {
  const { id } = useParams(); // Assuming your route includes an id parameter

  // Find the selected magazine based on the id
  const selectedMagazine = dummyMagazine.find(magazine => magazine.id === id);

  return (
    <div className='page'>
      <div className='left-card'>
        <div className="title">
          <hr />
        </div>
        <div className="content">
          {selectedMagazine ? (
            <FlipBook pdfUrl={selectedMagazine.pdfUrl} /> // Pass PDF URL to FlipBook
          ) : (
            <p>Magazine not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MagazineDetails;
