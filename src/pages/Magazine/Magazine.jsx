import React from 'react';
import './magazine.css';
import dummyMagazine from '../../data/dummyMagazine';
import MagazineGallery from '../../components/MagazineGallery/MagazineGallery';

const Magazine = () => {
  return (
    <div>
      <div className='left-card'>
        <div className="title"><h1>Dergilerimiz</h1> <hr /></div>
      </div>
      <MagazineGallery events={dummyMagazine} />
    </div>
  );
};

export default Magazine;
