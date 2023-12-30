import React from 'react';
import './MagazineDetails.css';
import dummyMagazine from '../../data/dummyMagazine';
import { useParams } from 'react-router-dom'; // Import useParams

const MagazineDetails = () => {
  // Access the event ID from the URL params using useParams
  const { id } = useParams();
 

  // Fetch the event details based on the ID from your data (dummyEvents)
  const selectedMagazine = dummyMagazine.find(magazine => magazine.id === id);
  

  // Check if the event exists
  if (!selectedMagazine) {
    return <div>Error: Event not found</div>;
  }

  const { title} = selectedMagazine;

  return (
    <div className='page'>
      <div className='left-card'>
        <div className="title">
          <h1>{title}</h1>
          <hr />
        </div>
        <div className="content">
          
        </div>
      </div>
      
      
    </div>
  );
};

export default MagazineDetails;
