"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from '../../styles/home/homePage.module.css';


export default function HomePage() {
  return (
    <div>
      <main className={styles.main}>
        <div className={`${styles.inner}`}>
          <ul className={`${styles['card-list']}`}>
            <li className={`${styles["card"]}`}>
              <div className={styles['title-box']}>
                <h2 className={`${styles['title']}`}>
                  쌤쌤쌤
                  <span>양식</span>
                </h2>
                <span>서울 용산구 한강로동</span>
              </div>
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
              <div className={`${styles["name-box"]}`}>
                <div className={`${styles["name"]}`}>
                  <img src="/img/home/profile_test.png" alt="test" />
                  이지역맛잘알
                </div>
                <div className={`${styles['time']}`}>12시간 전</div>
              </div>
              <p className={`${styles["text"]}`}>
                게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용
              </p>
              <div className={`${styles['icon-box']}`}>
                <div className={`${styles['icon']}`}>
                  <img src="/img/home/Heart_01.svg" alt="찜 아이콘" />
                  768
                </div>
                <div className={`${styles['icon']}`}>
                  <img src="/img/home/Chat.svg" alt="댓글 아이콘" />
                  123
                </div>
                <div className={`${styles['icon']}`}>
                  <img src="/img/home/Bookmark.svg" alt="북마크 아이콘" />
                  524
                </div>
              </div>
            </li>
            <li className={`${styles["card"]}`}>
              <div className={styles['title-box']}>
                <h2 className={`${styles['title']}`}>
                  쌤쌤쌤
                  <span>양식</span>
                </h2>
                <span>서울 용산구 한강로동</span>
              </div>
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
              <div className={`${styles["name-box"]}`}>
                <div className={`${styles["name"]}`}>
                  <img src="/img/home/profile_test.png" alt="test" />
                  이지역맛잘알
                </div>
                <div className={`${styles['time']}`}>12시간 전</div>
              </div>
              <p className={`${styles["text"]}`}>
                게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용
              </p>
              <div className={`${styles['icon-box']}`}>
                <div className={`${styles['icon']}`}>
                  <img src="/img/home/Heart_01.svg" alt="찜 아이콘" />
                  768
                </div>
                <div className={`${styles['icon']}`}>
                  <img src="/img/home/Chat.svg" alt="댓글 아이콘" />
                  123
                </div>
                <div className={`${styles['icon']}`}>
                  <img src="/img/home/Bookmark.svg" alt="북마크 아이콘" />
                  524
                </div>
              </div>
            </li>
            <li className={`${styles["card"]}`}>
              <div className={styles['title-box']}>
                <h2 className={`${styles['title']}`}>
                  쌤쌤쌤
                  <span>양식</span>
                </h2>
                <span>서울 용산구 한강로동</span>
              </div>
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
              <div className={`${styles["name-box"]}`}>
                <div className={`${styles["name"]}`}>
                  <img src="/img/home/profile_test.png" alt="test" />
                  이지역맛잘알
                </div>
                <div className={`${styles['time']}`}>12시간 전</div>
              </div>
              <p className={`${styles["text"]}`}>
                게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용
              </p>
              <div className={`${styles['icon-box']}`}>
                <div className={`${styles['icon']}`}>
                  <img src="/img/home/Heart_01.svg" alt="찜 아이콘" />
                  768
                </div>
                <div className={`${styles['icon']}`}>
                  <img src="/img/home/Chat.svg" alt="댓글 아이콘" />
                  123
                </div>
                <div className={`${styles['icon']}`}>
                  <img src="/img/home/Bookmark.svg" alt="북마크 아이콘" />
                  524
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
