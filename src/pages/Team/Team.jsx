import React from 'react'
import "./team.css"
import PersonCard from '../../components/PersonCard/PersonCard'

const Team = () => {
  const peopleData = [
    {
      photo: ' /img/photos/team/doruk.jpeg',
      name: 'Doruk Efe Erdem',
      title: 'Başkan',
    },
    {
      photo: '/img/photos/team/alara.jpeg',
      name: 'Azra Alara Alptekin',
      title: 'Sayman',
    },
    {
      photo:  '/img/photos/team/irmak.jpeg',
      name: 'Irmak Okyay',
      title: 'CP',
    },
    {
      photo: '/img/photos/team/dilaramelis.jpeg',
      name: 'Dilara Melis Durak',
      title: 'VC-HR',
    },
    {
      photo: '/img/photos/team/ilayda.jpeg',      name: 'İlayda Yavuzaslan',
      title: 'VC-PR',
    },
    {
      photo: '/img/photos/team/poyraz.jpeg',
      name: 'Poyraz Mert',
      title: 'VC-CR',
    },
    {
      photo: '/img/photos/team/ada.jpeg',
      name: 'Ada Irmak Köylü',
      title: 'IT Takım Koordinatörü',
    },
    {
      photo: '/img/photos/team/dilarakolay.jpeg',
      name: 'Dilara Kolay',
      title: 'IT Takım Koordinatörü',
    },
    {
      photo: '/img/photos/team/sena.jpeg',
      name: 'Sena Nizamoğlu',
      title: 'Kariyer Takım Koordinatörü',
    },
    {
      photo: '/img/photos/team/fatma.jpeg',
      name: 'Fatma Kurt',
      title: 'Kariyer Takım Koordinatörü',
    },
    {
      photo: '/img/photos/team/mali.jpeg',
      name: 'Muhammed Ali Bektaş',
      title: 'Design Takım Koordinatörü',
    },
    {
      photo: '',
      name: 'Hesna Kan',
      title: 'Design Takım Koordinatörü',
    },
    {
      photo: '/img/photos/team/ceren.jpeg',
      name: 'Ceren Çokan',
      title: 'Magazin Takım Koordinatörü',
    },
    {
      photo: '/img/photos/team/nehir.jpeg',
      name: 'Nehir Nahire Dalda',
      title: 'Magazin Takım Koordinatörü',
    },
    {
      photo: '/img/photos/team/adatk.jpeg',
      name: 'Ada Türkkahramanı',
      title: 'IGZ Ana Organizatörü',
    },
    {
      photo: '/img/photos/team/efe.jpeg',
      name: 'Muharrem Efe Şen',
      title: 'IGZ Ana Organizatörü',
    },
    {
      photo: '/img/photos/team/görkem.jpeg',
      name: 'Süleyman Görkem Taşdemir',
      title: 'IGZ Ana Organizatörü',
    },
    {
      photo: '/img/photos/team/beril.jpeg',
      name: 'Beril Kaşıkçıoğlu',
      title: 'PR Koorinatörü',
    },    
       
     
    
    

  ];


  return (


    <div className='team-page'>

      <h1 className='red'>Ekibimiz</h1>
      <div className="teamtitle"><h1>Board</h1></div>
      <div className="group top">

        <div className="people-div">
          {peopleData.slice(0, 3).map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </div>
      <div className="group top">
        <div className="people-div">
          {peopleData.slice(3, 6).map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </div>

      <div className="group left">
        <div className="teamtitle"><h1>IT Takım</h1><h1>Kordinatörleri</h1></div>
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
        <div className="teamtitle"><h1>Kariyer Takım</h1><h1>Kordinatörleri</h1></div>
      </div>

      <div className="group left">
        <div className="teamtitle"><h1>Design Takım</h1><h1>Kordinatörleri</h1></div>
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
        <div className="teamtitle"><h1>Magazin Takım</h1><h1>Koordinatörleri</h1></div>
      </div>
      

      
      <div className="group center">
        <div className="teamtitle"><h1>IGZ </h1><h1>Organizatörleri</h1></div>
        <div className='people-div'>
          {peopleData.slice(14, 16).map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
       </div>

    </div>

    
  )
}

export default Team




