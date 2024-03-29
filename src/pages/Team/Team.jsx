import React from 'react'
import "./team.css"
import PersonCard from '../../components/PersonCard/PersonCard'

const Team = () => {
  const peopleData = [
    {
      photo: 'http://localhost:3000/img/photos/team/Bade.PNG',
      name: 'Bade Naz Güreş',
      title: 'Başkan',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Onur Kaymaz.jpg',
      name: 'Hüseyin Onur Kaymaz',
      title: 'Sayman',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Alperen.jpg',
      name: 'Alperen Demiral',
      title: 'CP',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Ada.jpg',
      name: 'Ada Özdemiroğlu',
      title: 'VC-HR',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Tuğçe .jpeg',
      name: 'Tuğçe Taş',
      title: 'VC-PR',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Aziz Karademir.jpg',
      name: 'Aziz Karadmir',
      title: 'VC-CR',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Efe.PNG',
      name: 'Güngör Efe Çetin',
      title: 'IT Takım Kordinatörü',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/İpek Aymergen.JPG',
      name: 'İpek Güneş Aymergen',
      title: 'IT Takım Kordinatörü',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Defne.JPG',
      name: 'Defne Gümüş',
      title: 'Kariyer Takım Kordinatörü',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Deniz.jpg',
      name: 'Deniz Çoban',
      title: 'Kariyer Takım Kordinatörü',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Atakan.jpg',
      name: 'Atakan Tuna',
      title: 'Design Takım Kordinatörü',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Beril.jpg',
      name: 'Beril Kaya',
      title: 'Design Takım Kordinatörü',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Kaan Pulat.jpg',
      name: 'Kaan Pulat',
      title: 'Magazin Takım Kordinatörü',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Ozan.jpg',
      name: 'Ozan Rüştü Bezen',
      title: 'Magazin Takım Kordinatörü',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Berk.jpg',
      name: 'Enes Berk Türköz',
      title: 'IoT Line Fair Organizatörü',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Onat Kayhan.jpg',
      name: 'Onat Kayhan',
      title: 'IoT Line Fair Organizatörü',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Kaan Yılmaz Demir.HEIC',
      name: 'Kaan Yılmaz Demir',
      title: 'EESTech Challenge Organizatörü',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Berke.jpeg',
      name: 'Berke Şaban',
      title: 'EESTech Challenge Organizatörü',
    },
    {
      photo: 'http://localhost:3000/img/photos/team/Zelal Yanar.jpg',
      name: 'Zelal Yanar',
      title: 'EESTech Challenge Organizatörü',
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




