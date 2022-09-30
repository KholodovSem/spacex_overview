import React, {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import s from './slider.module.css';

function Slider({images}) {
  return (
    <Swiper modules={[Navigation]} className={s.swiper}>
      {images.map((img) => (
        <SwiperSlide key={img}>
          <img src={img} alt="spaceship" className={s.spaceship} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
