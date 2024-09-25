"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../styles/home/homePage.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeSwiper({board_idx} : {board_idx:string}) {
  return (
    <Link href={board_idx}>
      <Swiper
        className={`${styles["swiper"]}`}
        slidesPerView={'auto'}
        spaceBetween={8}
      >
        <SwiperSlide
          className={`${styles['swiper-slide']}`}>
          <Image width={184} height={184} src="/img/home/1.jpg" alt="test" />
        </SwiperSlide>
        <SwiperSlide
          className={`${styles['swiper-slide']}`}>
          <Image width={184} height={184} src="/img/home/2.jpg" alt="test" />
        </SwiperSlide>
        <SwiperSlide
          className={`${styles['swiper-slide']}`}>
          <Image width={184} height={184} src="/img/home/3.jpg" alt="test" />
        </SwiperSlide>
        <SwiperSlide
          className={`${styles['swiper-slide']}`}>
          <Image width={184} height={184} src="/img/home/4.jpg" alt="test" />
        </SwiperSlide>
      </Swiper>
    </Link>
  );
}