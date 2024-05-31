import React from 'react'
import "./about.css"
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';


const About = () => {

  const photos = [
    'https://istanbul.eestec.net/img/photos/about/about-1.jpg',
    'https://istanbul.eestec.net/img/photos/about/about-2.JPG',
    'https://istanbul.eestec.net/img/photos/about/about-3.jpg',
    'https://istanbul.eestec.net/img/photos/about/about-4.jpg',
    'https://istanbul.eestec.net/img/photos/about/about-5.jpg',
    'https://istanbul.eestec.net/img/photos/about/about-6.JPG',
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
        <div className="content right-text"><p>EESTEC LC Istanbul'un amacı uluslararası seminer ve değişim programlarına üyelerini yollamak, teknik bilgileri, sosyal ve kültürel değerleri paylaşmak, öğrencilere diğer ülkeleri ve eğitim sistemini tanıtmaktır. Ayrıca EESTEC LC Istanbul uluslararası kariyer, iş ve staj fırsatlarını da mümkün kılmaktadır. Sonuç olarak LC İstanbul, aktif üyelerinin organizasyon becerileri kazanmalarına, sektörde faaliyet gösteren kuruluşlarla daha yakın ilişkiler kurmalarına, sosyal ve kültürel değerler ve fırsatların paylaşılmasına yardımcı olmaktadır.</p></div>
      </div>

      <div className='left-card'>
        <div className="title"><h1>Neler Yapıyoruz?</h1> <hr /></div>
        <div className="content"><p>Peki kulübümüz neler yapıyor? Hem uluslararası etkinliklerde hem de yerel seviyede aktif olarak faaliyetlerimizi sürdürmekteyiz. Yerel komitemiz bünyesinde çeşitli yazılım eğitimleri vermekte, Türkiye’nin en büyük IoT fuarını düzenlemekte ve kazanan ekibin final turu için yurt dışına çıktığı EESTech Challenge Local Round adında bir kodlama yarışması organize etmekteyiz. Tüm bunların yanı sıra her sene, yurt dışındaki EESTEC komitelerinden katılımcıları ağırladığımız bir uluslararası etkinlik de düzenlemekteyiz. Üyelerimizin gelişimlerine hem yurt içinde hem de uluslararası etkinliklerde katkı sağlamayı hedef edinmiş bir şekilde çalışmalarımızı sürdürmekteyiz. #lcistanbulrocks</p></div>
      </div>
      <div className='left-card'>
        <div className="title"><hr /><h1>Fotoğraflarımız</h1> </div>

      </div>
      <PhotoGallery photos={photos} />



    </div>
  )
}

export default About