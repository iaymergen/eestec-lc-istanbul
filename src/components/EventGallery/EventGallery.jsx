import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './EventGallery.css';
import 'swiper/css/effect-coverflow';
import { Pagination, Navigation } from 'swiper/modules';
import EventCard from '../EventCard/EventCard';


const EventGallery = ({events}) => {
  const [swiper, setSwiper] = useState(null);

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div className='gallery-container'>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        style={{
          "--swiper-navigation-color": "#a52e30",
          "--swiper-pagination-color": "#a52e30",
        }}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => setSwiper(swiper)}
        className='swiper-container'
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <EventCard
              title={event.title}
              mainPhoto={event.mainPhoto}
            />
          </SwiperSlide>
        ))}
        <div className='slider-controller'>
          <div className='swiper-button-prev slider-arrow' onClick={handlePrevClick}></div>
          <div className='swiper-button-next slider-arrow' onClick={handleNextClick}></div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
    </div>
  );
};

export default EventGallery;
