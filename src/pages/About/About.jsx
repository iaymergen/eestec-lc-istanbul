import React from 'react'
import "./about.css"
import PhotoGallery from './PhotoGallery';


const About = () => {

  const photos = [
    'http://localhost:3000/deneme.jpg',
    'http://localhost:3000/pexels.jpeg',
    'http://localhost:3000/pexels2.jpg',
    'http://localhost:3000/pexels2.jpeg',
    'http://localhost:3000/pexels2 (2).jpg',
    'http://localhost:3000/pexels2 (3).jpg',

];

  return (
    <div className='page'>
      <div className='left-card'>
        <div className="title"><h1>Biz Kimiz?</h1> <hr /></div>
        
        <div className="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
      </div>
      <div className='left-card'>
        <div className="title"><hr /><h1>Amacımız Ne?</h1></div>
        <div className="content right-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        </div>

      <div className='left-card'>
        <div className="title"><h1>Neler Yapıyoruz?</h1> <hr /></div>
        <div className="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
       </div>
       
       
       <PhotoGallery photos={photos} photosPerPage={3} />


      
      
    </div>
  )
}

export default About