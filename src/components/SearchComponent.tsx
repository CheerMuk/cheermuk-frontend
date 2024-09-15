import styles from "../styles/components/searchComponent.module.css";

export default function SearchComponent() {
  return (
    <div className={`${styles['container']}`}>
      <div className={`${styles["sort-box"]}`}>
        <img src="/img/icon/listup.svg" alt="리스트 아이콘" />
        <span>최신순</span>
        <img className={`${styles["small-img"]}`} src="/img/icon/down_arrow.png" alt="아래 화살표" />
      </div>
      <div className={`${styles["filter-box"]}`}>
        <span>거리 반경</span>
        <img className={`${styles["small-img"]}`} src="/img/icon/down_arrow.png" alt="아래 화살표" />
      </div>
      <div className={`${styles["filter-box"]}`}>
        <span>음식 종류</span>
        <img className={`${styles["small-img"]}`} src="/img/icon/down_arrow.png" alt="아래 화살표" />
      </div>
    </div>
  );
}