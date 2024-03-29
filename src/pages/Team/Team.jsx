import React from 'react'
import "./team.css"
import PersonCard from '../../components/PersonCard/PersonCard'

const Team = () => {
  const peopleData = [
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'John Doe',
      title: 'Software Engineer',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'John Doe',
      title: 'Software Engineer',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'John Doe',
      title: 'Software Engineer',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },
    {
      photo: 'http://localhost:3000/img/photos/pexels2.jpeg',
      name: 'Jane Doe',
      title: 'Product Manager',
    },

  ];


  return (


    <div className='team-page'>

      <h1 className='red'>Ekibimiz</h1>

      <div className="group right">
          <div className="people-div board">
            {peopleData.slice(0, 6).map((person, index) => (
              <PersonCard key={index} person={person} />
            ))}
          </div>
        <h1 className="teamtitle ttrigt">Board</h1>
      </div>


      <div className="group left">
        <h1 className="teamtitle">IT Takım<br />Kordinatörleri</h1>
        <div className='people-div'>
          {peopleData.slice(6, 8).map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </div>

      <div className="group right">
        <div className="people-div">
          {peopleData.slice(8, 10).map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
        <h1 className="teamtitle ttright">Kariyer Takım<br />Kordinatörleri</h1>
      </div>

      <div className="group left">
        <h1 className="teamtitle">Design Takım<br />Kordinatörleri</h1>
        <div className='people-div'>
          {peopleData.slice(10, 12).map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </div>

      <div className="group right">
        <div className="people-div">
          {peopleData.slice(12, 14).map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
        <h1 className="teamtitle ttright">Magazin Takım<br />Kordinatörleri</h1>
      </div>

      <div className="group left">
        <h1 className="teamtitle">IoT Line Fair'23<br />Organizatörleri</h1>
        <div className='people-div'>
          {peopleData.slice(14, 16).map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </div>

      <div className="group right">
        <div className="people-div">
          {peopleData.slice(16).map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
        <h1 className="teamtitle ttright">EESTech Challenge<br />Organizatörleri</h1>
      </div>

    </div>
  )
}

export default Team




