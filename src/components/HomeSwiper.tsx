"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from '../styles/home/homePage.module.css';

export default function HomeSwiper() {
  return (
    <Swiper
      className={`${styles["swiper"]}`}
      slidesPerView={'auto'}
      spaceBetween={8}
    >
      <SwiperSlide
        className={`${styles['swiper-slide']}`}>
        <img src="/img/home/1.jpg" alt="test" />
      </SwiperSlide>
      <SwiperSlide
        className={`${styles['swiper-slide']}`}>
        <img src="/img/home/2.jpg" alt="test" />
      </SwiperSlide>
      <SwiperSlide
        className={`${styles['swiper-slide']}`}>
        <img src="/img/home/3.jpg" alt="test" />
      </SwiperSlide>
      <SwiperSlide
        className={`${styles['swiper-slide']}`}>
        <img src="/img/home/4.jpg" alt="test" />
      </SwiperSlide>
    </Swiper>
  );
}