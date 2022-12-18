import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide wwwwwwwwwww1</SwiperSlide>
      <SwiperSlide>Slide wwwwwwwwwww2</SwiperSlide>
      <SwiperSlide>Slidewwwwwwwwwwww 3</SwiperSlide>
      <SwiperSlide>Slidewwwwwwwww 4</SwiperSlide>
    </Swiper>
  )
}
