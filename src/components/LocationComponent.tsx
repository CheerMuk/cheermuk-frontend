import useGeolocation from "@/hook/geolocation"
import styles from "../styles/components/locationComponent.module.css";

export default function LocationComponent() {
  const location = useGeolocation();

  return (
    <div>
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