import React from 'react'
import "./magazine.css"
import dummyMagazine from '../../data/dummyMagazine'
import MagazineCard from '../../components/MagazineCard/MagazineCard';

const Magazine = () => {

  
  
  return (
    <div>
      <div>
      
      <div className='left-card'>
        <div className="title"><h1>Dergilerimiz</h1> <hr /></div>
      </div>
      <div className='magazines-box'>
      {dummyMagazine.map((magazine, index) =>
        <MagazineCard className="cards" key={index}
        id={magazine.id}
        title={magazine.title}
        mainPhoto={magazine.mainPhoto}
        />
      
      )}
      </div>
    </div>
    </div>
  )
}

export default Magazine