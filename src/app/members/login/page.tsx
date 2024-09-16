import Image from 'next/image';
import styles from '../../../styles/members/login.module.css';

export default function login() {
  return <section className={styles.container}>
    <div className={styles.inner}>
      <div className={styles["img_box"]}>
        <img src="/img/members/logo.svg" alt="cheermuk" />
      </div>
      <h1 className={`f-display ${styles.title}`}>찍먹러들이 작성한<br />
        100% 로컬 맛집만 모아논<br />
        리뷰 공유 커뮤니티
      </h1>
      <p className={`${styles.text}`}>지금 바로 시작하세요</p>
      <div className={styles["btn_box"]}>
        <button className={`${styles.btn} ${styles.kakao} f-head-3`}>
          <img src="/img/members/kakaotalk-icon.png" alt="카카오 로그인" />
          카카오로 로그인
        </button>
        <button className={`${styles.btn} ${styles.google} f-head-3`}>
          <img src="/img/members/google-icon.png" alt="구글 로그인" />
          구글로 로그인
        </button>
      </div>
      
    </div>
    <Image
        className={styles["fixed-img"]}
        src="/img/members/pretzel.png"
        alt="프레첼 이미지"
        width={393}
        height={635}
        style={{
          objectFit: 'contain'
        }}
      />
  </section>
}