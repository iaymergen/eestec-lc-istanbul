import React from 'react'
import "./about.css"
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';


const About = () => {

  const photos = [
    'http://localhost:3000/img/photos/deneme.jpg',
    'http://localhost:3000/img/photos/about/about-1.jpg',
    'http://localhost:3000/img/photos/about/about-2.JPG',
    'http://localhost:3000/img/photos/about/about-3.jpg',


  ];

  return (
    <div className='page'>
      <div className='left-card'>
        <div className="title"><h1>Biz Kimiz?</h1> <hr /></div>

        <div className="content"><p>EESTEC LC Istanbul, uluslararası bir mühendislik topluluğu olan EESTEC'in Avrupa’daki 46 farklı komitesinden biridir. Başta bilgisayar, elektrik, elektronik, kontrol ve telekomünikasyon mühendisliği öğrencileri olmak üzere İstanbul’da okuyan öğrencilerin üyeliğine açık olarak İstanbul Teknik Üniversitesi, Elektrik-Elektronik Fakültesi'nde faaliyetlerini sürdürmektedir. Fakültemiz öğrencileri ilk olarak Şubat 2005'te EESTEC İstanbul Yerel Komitesini oluşturdular. EESTEC LC Istanbul şu anda hem farklı EESTEC komitelerinin katılabileceği uluslararası etkinliklere hem de İstanbul'da katılımcılarının teknik ve sosyal becerilerini geliştirmeye yönelik çeşitli etkinliklere ev sahipliği yapmaktadır.
        </p></div>
      </div>
      <div className='left-card'>
        <div className="title"><hr /><h1>Amacımız Ne?</h1></div>
        <div className="content right-text"><p>EESTEC LC Istanbul'un amacı uluslararası seminer ve değişim programlarına üyelerini yollamak, teknik bilgileri, sosyal ve kültürel değerleri paylaşmak, öğrencilere diğer ülkeleri ve eğitim sistemini tanıtmaktır. Ayrıca EESTEC LC Istanbul uluslararası kariyer, iş ve staj fırsatlarını da mümkün kılmaktadır. Sonuç olarak LC İstanbul, aktif üyelerinin organizasyon becerileri kazanmalarına, sektörde faaliyet gösteren kuruluşlarla daha yakın ilişkiler kurmalarına, sosyal ve kültürel değerler ve fırsatların paylaşılmasına yardımcı olmaktadır. #lcistanbulrocks</p></div>
      </div>

      <div className='left-card'>
        <div className="title"><h1>Neler Yapıyoruz?</h1> <hr /></div>
        <div className="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
      </div>
      <div className='left-card'>
        <div className="title"><hr /><h1>Fotoğraflarımız</h1> </div>

      </div>
      <PhotoGallery photos={photos} />



    </div>
  )
}

export default About