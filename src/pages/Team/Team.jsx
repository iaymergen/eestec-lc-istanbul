import React from 'react'
import "./team.css"
import PersonCard from '../../components/PersonCard/PersonCard'

const Team = () => {
  const peopleData = [
    {
      photo: '',
      name: 'Doruk Efe Erdem',
      title: 'Başkan',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Onur Kaymaz.jpg',
      name: 'Azra Alara Alptekin',
      title: 'Sayman',
    },
    {
      photo:  '/img/photos/team/irmak.jpeg'
      name: 'Irmak Okyay',
      title: 'CP',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Ada.jpg',
      name: 'Dilara Melis Durak',
      title: 'VC-HR',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Tuğçe .jpeg',
      name: 'İlayda Yavuzaslan',
      title: 'VC-PR',
    },
    {
      photo: '/img/photos/team/poyraz.jpeg',
      name: 'Poyraz Mert',
      title: 'VC-CR',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Efe.PNG',
      name: 'Ada Irmak Köylü',
      title: 'IT Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/İpek Aymergen.JPG',
      name: 'Dilara Kolay',
      title: 'IT Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Defne.JPG',
      name: 'Sena Nizamoğlu',
      title: 'Kariyer Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Deniz.jpg',
      name: 'Fatma Kurt',
      title: 'Kariyer Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Atakan.jpg',
      name: 'Muhammed Ali Bektaş',
      title: 'Design Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Beril.jpg',
      name: 'Hesna Kan',
      title: 'Design Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Kaan Pulat.jpg',
      name: 'Ceren Çokan',
      title: 'Magazin Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/OzanRB.png',
      name: 'Nehir Nahire Dalda',
      title: 'Magazin Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Berk.jpg',
      name: 'Ada Türkkahramanı',
      title: 'IoT Line Fair Organizatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Onat Kayhan.jpg',
      name: 'Muharrem Efe Şen',
      title: 'IoT Line Fair Organizatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/KaanYD.jpeg',
      name: 'Süleyman Görkem Taşdemir',
      title: 'EESTEC Summit Ana Organizatörü',
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
        <div className="teamtitle"><h1>Magazin Takım</h1><h1>Kordinatörleri</h1></div>
      </div>

      <div className="group left">
        <div className="teamtitle"><h1>IoT Line Fair'24</h1><h1>Organizatörleri</h1></div>
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
        <div className="teamtitle"><h1>EESTech Challenge</h1><h1>Organizatörleri</h1></div>
      </div>

    </div>
  )
}

export default Team




