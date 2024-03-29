import React from 'react'
import "./home.css"
import EventDetails from '../EventDetails/EventDetails'
import dummyEvents from '../../data/dummyEvents';
import EventGallery from '../../components/EventGallery/EventGallery'
import YouTubePlayer from '../../components/YoutubePlayer/YoutubePlayer';
import EventCard from '../../components/EventCard/EventCard';
import dummyMagazine from '../../data/dummyMagazine'
import MagazineCard from '../../components/MagazineCard/MagazineCard';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='eestec__home-page'>
      <div className='eestec__hero-1'>
        <div className='eestec__hero_container-1'>
          <div className='eestec__hero_slogan'>
            <h2>Travel.</h2>
            <h2>Connect.</h2>
            <h2>Improve.</h2>
          </div>
          <button className='eestec__hero_uye-ol'><p>Üye Ol</p></button>
        </div>

        <div className='eestec__hero_container-2'>
          <div className='eestec__hero_bilgi'>
            <h3>Biz Kimiz?</h3>
            <p>EESTEC LC Istanbul, uluslararası bir mühendislik topluluğu olan EESTEC'in Avrupa’daki 46 farklı komitesinden biridir. Başta bilgisayar, elektrik, elektronik, kontrol ve telekomünikasyon mühendisliği öğrencileri olmak üzere İstanbul’da okuyan öğrencilerin üyeliğine açık olarak İstanbul Teknik Üniversitesi, Elektrik-Elektronik Fakültesi'nde faaliyetlerini sürdürmektedir. Fakültemiz öğrencileri ilk olarak Şubat 2005'te EESTEC İstanbul Yerel Komitesini oluşturdular. EESTEC LC Istanbul şu anda hem farklı EESTEC komitelerinin katılabileceği uluslararası etkinliklere hem de İstanbul'da katılımcılarının teknik ve sosyal becerilerini geliştirmeye yönelik çeşitli etkinliklere ev sahipliği yapmaktadır. </p>
          </div>

          <div className='eestec__hero_bilgi'>
            <h3>Neler Yapıyoruz?</h3>
            <p>Peki kulübümüz neler yapıyor? Hem uluslararası etkinliklerde hem de yerel seviyede aktif olarak faaliyetlerimizi sürdürmekteyiz. Yerel komitemiz bünyesinde çeşitli yazılım eğitimleri vermekte, Türkiye’nin en büyük IoT fuarını düzenlemekte ve kazanan ekibin final turu için yurt dışına çıktığı EESTech Challenge Local Round adında bir kodlama yarışması organize etmekteyiz. Tüm bunların yanı sıra her sene, yurt dışındaki EESTEC komitelerinden katılımcıları ağırladığımız bir uluslararası etkinlik de düzenlemekteyiz. Üyelerimizin gelişimlerine hem yurt içinde hem de uluslararası etkinliklerde katkı sağlamayı hedef edinmiş bir şekilde çalışmalarımızı sürdürmekteyiz. #lcistanbulrocks</p>
          </div>

          <div className='eestec__hero_bilgi'>
            <h3>Nasıl Üye Olunur?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus amet iure incidunt, non molestias, dicta eius voluptatum ipsam rem iusto deleniti ipsa ab tempora facere repudiandae placeat? Quos, magnam sit laudantium nulla ea dolorem cum vel? Aut, aperiam sit.</p>
          </div>
        </div>
        <div className='break'><hr /></div>
      </div>

      <div className='eestec__hero-2'>
        <div className='eestec__etkinlikler'>
          <h3>Etkinliklerimiz</h3>
        </div>

        <div>
          <EventGallery events={dummyEvents} />
        </div>

        <div className='eestec__hero-2_button'>
          <button className='eestec__daha-fazlasi'><a><Link to="/projects">
            <p style={{ textDecoration: 'none' }}>Daha Fazlası</p>
          </Link></a></button>
        </div>

        <div className='eestec__hero-2_tanitim'>
          <div className='eestec__nedir_tanitim yazi'>
            <h3>
              EESTEC Nedir?
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quam illo fuga non quod similique iure quisquam voluptatibus consequuntur sed consequatur ad aperiam commodi error dolorem nesciunt possimus, nam veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nulla ratione atque tempora, sed eveniet?
            </p>
          </div>
          <div className='eestec__nedir_tanitim video'>
            <YouTubePlayer />
          </div>
        </div>

        <div className='eestec__etkinlikler'>
          <h3>Magazin</h3>
        </div>

        <div className='eestec__magazine_box'>
          {dummyMagazine.map((magazine, index) =>
            <MagazineCard className="eestec__magazine_cards" key={index}
              id={magazine.id}
              title={magazine.title}
              mainPhoto={magazine.mainPhoto}
            />
          )}
        </div>

        <div className='eestec__hero-2_button'>
          <button className='eestec__daha-fazlasi'><a><Link to="/magazine">
            <p style={{ textDecoration: 'none' }}>Dergilerimiz</p>
          </Link></a>
          </button></div>


      </div>
    </div>
  )
}

export default Home