import TopAppbar from "@/components/TopAppbar";
import styles from '../../../styles/home/detailPage.module.css';
import Image from "next/image";
import DetailSwiper from "@/components/DetailSwiper";
export default function page() {
  return (
    <div className={styles.container}>
      <TopAppbar />
      <div className={`${styles['shop-box']}`}>
        <div className={`${styles['shop-title-box']}`}>
          <h1 className={`${styles['shop-title']}`}>
            쌤쌤쌤
            <span>양식</span>
          </h1>
          <p>서울 용산구 한강로동</p>
        </div>
        <div className={`${styles['icon-box']}`}>
          <Image width={24} height={24} src={'/img/icon/share.svg'} alt="공유" />
          <Image width={24} height={24} src={'/img/icon/bookmark.svg'} alt="북마크" />
        </div>
      </div>
      <DetailSwiper />
      <div className={styles['profile-box']}>
        <div className={styles['profile']}>
          <Image width={28} height={28} src={'/img/home/profile_test.png'} alt="테스트 이미지" />
          <span>이지역맛잘알</span>
        </div>
        <div className={styles['profile-time']}>
          12시간 전
        </div>
      </div>
      <p className={styles['content']}>
        진짜 맛있어요.<br />
        조금 비싸요..<br />
        서비스 완전 좋아요..<br />
        짱짱짱.
      </p>
      <div className={styles['rating-box-wrap']}>
        <h3 className={styles['rating-box-title']}>총평 4.5</h3>
        <div className={styles['rating-content']}>
          <h4 className={styles['rating-content-title']}>맛</h4>
          <div className={styles['rating-content-star']}>
            <Image width={24} height={24} src={'/img/icon/star-a.svg'} alt="별점" />
            <Image width={24} height={24} src={'/img/icon/star-a.svg'} alt="별점" />
            <Image width={24} height={24} src={'/img/icon/star-a.svg'} alt="별점" />
            <Image width={24} height={24} src={'/img/icon/star-a.svg'} alt="별점" />
            <Image width={24} height={24} src={'/img/icon/star-a.svg'} alt="별점" />
          </div>
        </div>
        <div className={styles['rating-content']}>
          <h4 className={styles['rating-content-title']}>가격</h4>
          <div className={styles['rating-content-star']}>
            <Image width={24} height={24} src={'/img/icon/star-a.svg'} alt="별점" />
            <Image width={24} height={24} src={'/img/icon/star-a.svg'} alt="별점" />
            <Image width={24} height={24} src={'/img/icon/star-a.svg'} alt="별점" />
            <Image width={24} height={24} src={'/img/icon/star.svg'} alt="별점" />
            <Image width={24} height={24} src={'/img/icon/star.svg'} alt="별점" />
          </div>
        </div>
        <div className={styles['rating-content']}>
          <h4 className={styles['rating-content-title']}>서비스</h4>
          <div className={styles['rating-content-star']}>
            <Image width={24} height={24} src={'/img/icon/star-a.svg'} alt="별점" />
            <Image width={24} height={24} src={'/img/icon/star-a.svg'} alt="별점" />
            <Image width={24} height={24} src={'/img/icon/star-a.svg'} alt="별점" />
            <Image width={24} height={24} src={'/img/icon/star-a.svg'} alt="별점" />
            <Image width={24} height={24} src={'/img/icon/star.svg'} alt="별점" />
          </div>
        </div>
      </div>
      <div className={styles['external-links']}>
        <Image width={24} height={24} src={'/img/icon/naver.png'} alt="네이버아이콘" />
        음식점 보러가기
      </div>
      <div className={styles['info-box']}>
        <div className={styles['info-item-wrap']}>
          <div className={styles['info-item']}>
            <Image width={24} height={24} src={'/img/icon/hart.svg'} alt="하트 선택전" />
            768
          </div>
          <div className={styles['info-item']}>
            <Image width={24} height={24} src={'/img/icon/chat.svg'} alt="채팅아이콘" />
            123
          </div>
          <div className={styles['info-item']}>
            <Image width={24} height={24} src={'/img/icon/bookmark.svg'} alt="북마크 선택전" />
            524
          </div>
        </div>
        <div className={styles['info-item-wrap']}>
          <div className={styles['info-item']}>
            <Image width={24} height={24} src={'/img/icon/view.svg'} alt="뷰아이콘" />
            524
          </div>
        </div>
      </div>
    </div>
  );
}