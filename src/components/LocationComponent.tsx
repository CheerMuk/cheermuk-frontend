"use client";
import useGeolocation from "@/hook/geolocation"
import styles from "../styles/components/locationComponent.module.css";

export default function LocationComponent() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const location = useGeolocation();

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.inner}`}>
        <img src="/img/icon/location.png" alt="위치 아이콘" />
        <span>지역선택</span>
        <div className={`${styles["down-arrow-wrap"]}`}>
          <img src="/img/icon/down_arrow.png" alt="아래방향 화살표" />
        </div>

      </div>
    </div>
  )
}