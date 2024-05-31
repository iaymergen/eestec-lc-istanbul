import React from 'react'
import "./team.css"
import PersonCard from '../../components/PersonCard/PersonCard'

const Team = () => {
  const peopleData = [
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Bade.PNG',
      name: 'Bade Naz Güreş',
      title: 'Başkan',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Onur Kaymaz.jpg',
      name: 'Hüseyin Onur Kaymaz',
      title: 'Sayman',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Alperen.jpg',
      name: 'Alperen Demiral',
      title: 'CP',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Ada.jpg',
      name: 'Ada Özdemiroğlu',
      title: 'VC-HR',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Tuğçe .jpeg',
      name: 'Tuğçe Taş',
      title: 'VC-PR',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Aziz Karademir.jpg',
      name: 'Aziz Karadmir',
      title: 'VC-CR',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Efe.PNG',
      name: 'Güngör Efe Çetin',
      title: 'IT Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/İpek Aymergen.JPG',
      name: 'İpek Güneş Aymergen',
      title: 'IT Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Defne.JPG',
      name: 'Defne Gümüş',
      title: 'Kariyer Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Deniz.jpg',
      name: 'Deniz Çoban',
      title: 'Kariyer Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Atakan.jpg',
      name: 'Atakan Tuna',
      title: 'Design Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Beril.jpg',
      name: 'Beril Kaya',
      title: 'Design Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Kaan Pulat.jpg',
      name: 'Kaan Pulat',
      title: 'Magazin Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/OzanRB.png',
      name: 'Ozan Rüştü Bezen',
      title: 'Magazin Takım Kordinatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Berk.jpg',
      name: 'Enes Berk Türköz',
      title: 'IoT Line Fair Organizatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Onat Kayhan.jpg',
      name: 'Onat Kayhan',
      title: 'IoT Line Fair Organizatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/KaanYD.jpeg',
      name: 'Kaan Yılmaz Demir',
      title: 'EESTech Challenge Organizatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/BerkeSaban.jpeg',
      name: 'Berke Şaban',
      title: 'EESTech Challenge Organizatörü',
    },
    {
      photo: 'https://istanbul.eestec.net/img/photos/team/Zelal Yanar.jpg',
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




