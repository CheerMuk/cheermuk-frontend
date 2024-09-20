import styles from '../../styles/home/homePage.module.css';
import LocationComponent from '@/components/LocationComponent';
import SearchComponent from '@/components/SearchComponent';
import LineComponent from '@/components/LineComponent';
import BottomAppbar from '@/components/BottomAppbar';
import HomeSwiper from '@/components/HomeSwiper';
import Image from 'next/image';


export default function HomePage() {
  return (
    <div className={styles.container}>
      <LocationComponent />
      <SearchComponent />
      <LineComponent />
      <main className={styles.main}>
        <div className={`${styles.inner}`}>
          <ul className={`${styles['card-list']}`}>
            <li className={`${styles["card"]}`}>
              <div className={styles['title-box']}>
                <div>
                  <h2 className={`${styles['title']}`}>
                    쌤쌤쌤
                    <span>양식</span>
                  </h2>
                  <span className={`${styles["address"]}`}>서울 용산구 한강로동</span>
                </div>
                <div className={`${styles["name"]}`}>
                  <Image width={24} height={24} src="/img/home/profile_test.png" alt="test" />
                  이지역맛잘알
                </div>
              </div>
              <HomeSwiper />
              <div className={`${styles["text-box"]}`}>
                <p className={`${styles['text']}`}>용산에 있는 유명한 맛집 말고 제가 20년 다닌 찐 로컬 맛집 추천드려요. 라자냐랑 뇨끼는 꼭 드셔야됩니다.</p>
                <div className={`${styles['time']}`}>12시간 전</div>
              </div>
              <div className={`${styles['icon-box']}`}>
                <div className={`${styles['icon']}`}>
                  <Image width={24} height={24} src="/img/home/Heart_01.svg" alt="찜 아이콘" />
                  768
                </div>
                <div className={`${styles['icon']}`}>
                  <Image width={24} height={24} src="/img/home/Chat.svg" alt="댓글 아이콘" />
                  123
                </div>
                <div className={`${styles['icon']}`}>
                  <Image width={24} height={24} src="/img/home/Bookmark.svg" alt="북마크 아이콘" />
                  524
                </div>
              </div>
              <LineComponent />
            </li>
            <li className={`${styles["card"]}`}>
              <div className={styles['title-box']}>
                <div>
                  <h2 className={`${styles['title']}`}>
                    쌤쌤쌤
                    <span>양식</span>
                  </h2>
                  <span className={`${styles["address"]}`}>서울 용산구 한강로동</span>
                </div>
                <div className={`${styles["name"]}`}>
                  <Image width={24} height={24} src="/img/home/profile_test.png" alt="test" />
                  이지역맛잘알
                </div>
              </div>
              <HomeSwiper />
              <div className={`${styles["text-box"]}`}>
                <p className={`${styles['text']}`}>용산에 있는 유명한 맛집 말고 제가 20년 다닌 찐 로컬 맛집 추천드려요. 라자냐랑 뇨끼는 꼭 드셔야됩니다.</p>
                <div className={`${styles['time']}`}>12시간 전</div>
              </div>
              <div className={`${styles['icon-box']}`}>
                <div className={`${styles['icon']}`}>
                  <Image width={24} height={24} src="/img/home/Heart_01.svg" alt="찜 아이콘" />
                  768
                </div>
                <div className={`${styles['icon']}`}>
                  <Image width={24} height={24} src="/img/home/Chat.svg" alt="댓글 아이콘" />
                  123
                </div>
                <div className={`${styles['icon']}`}>
                  <Image width={24} height={24} src="/img/home/Bookmark.svg" alt="북마크 아이콘" />
                  524
                </div>
              </div>
              <LineComponent />
            </li>
            <li className={`${styles["card"]}`}>
              <div className={styles['title-box']}>
                <div>
                  <h2 className={`${styles['title']}`}>
                    쌤쌤쌤
                    <span>양식</span>
                  </h2>
                  <span className={`${styles["address"]}`}>서울 용산구 한강로동</span>
                </div>
                <div className={`${styles["name"]}`}>
                <Image width={24} height={24} src="/img/home/profile_test.png" alt="test" />
                  이지역맛잘알
                </div>
              </div>
              <HomeSwiper />
              <div className={`${styles["text-box"]}`}>
                <p className={`${styles['text']}`}>용산에 있는 유명한 맛집 말고 제가 20년 다닌 찐 로컬 맛집 추천드려요. 라자냐랑 뇨끼는 꼭 드셔야됩니다.</p>
                <div className={`${styles['time']}`}>12시간 전</div>
              </div>
              <div className={`${styles['icon-box']}`}>
              <div className={`${styles['icon']}`}>
                  <Image width={24} height={24} src="/img/home/Heart_01.svg" alt="찜 아이콘" />
                  768
                </div>
                <div className={`${styles['icon']}`}>
                  <Image width={24} height={24} src="/img/home/Chat.svg" alt="댓글 아이콘" />
                  123
                </div>
                <div className={`${styles['icon']}`}>
                  <Image width={24} height={24} src="/img/home/Bookmark.svg" alt="북마크 아이콘" />
                  524
                </div>
              </div>
              <LineComponent />
            </li>
          </ul>
        </div>
      </main>
      <BottomAppbar />
    </div>
  );
}
