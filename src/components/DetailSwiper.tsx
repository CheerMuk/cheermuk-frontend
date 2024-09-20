"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import styles from '../styles/components/detailswiper.module.css'

export default function DetailSwiper() {
  return (
    <Swiper
      className={`${styles["swiper"]}`}
      slidesPerView={'auto'}
      spaceBetween={12}
    >
      <SwiperSlide
        className={`${styles['swiper-slide']}`}>
        <Image className={`${styles['icon']}`} width={24} height={24} src={'/img/icon/sizeUp.svg'} alt='사이즈키우기' />
        <Image width={184} height={184} src="/img/home/detail/1.jpg" alt="test" />
      </SwiperSlide>
      <SwiperSlide
        className={`${styles['swiper-slide']}`}>
        <Image className={`${styles['icon']}`} width={24} height={24} src={'/img/icon/sizeUp.svg'} alt='사이즈키우기' />
        <Image width={184} height={184} src="/img/home/detail/2.jpg" alt="test" />
      </SwiperSlide>
      <SwiperSlide
        className={`${styles['swiper-slide']}`}>
        <Image className={`${styles['icon']}`} width={24} height={24} src={'/img/icon/sizeUp.svg'} alt='사이즈키우기' />
        <Image width={184} height={184} src="/img/home/detail/3.jpg" alt="test" />
      </SwiperSlide>
      <SwiperSlide
        className={`${styles['swiper-slide']}`}>
        <Image className={`${styles['icon']}`} width={24} height={24} src={'/img/icon/sizeUp.svg'} alt='사이즈키우기' />
        <Image width={184} height={184} src="/img/home/detail/4.jpg" alt="test" />
      </SwiperSlide>
    </Swiper>
  );
}