'use client';
// import useGeolocation, { locationType } from "@/hook/geolocation"
import styles from "../styles/components/locationComponent.module.css";
import Image from "next/image";
// import { getMyLocation } from "@/hook/kakaomaps";
import {useState } from "react";
import district from "../data/district.json"


// 전역 변수로 선언 (초기 값은 null)
export const geocoder: kakao.maps.services.Geocoder | null = null;

export default function LocationComponent() {
  const [modalShow, setmodalShow] = useState<boolean>(false)

  const showModal = () => {
    // console.log('show')
    setmodalShow(true)
  }
  const closeModal = () => {
    // console.log('hide')
    setmodalShow(false)
  }

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.inner}`} onClick={showModal}>
          <Image width={24} height={24} src="/img/icon/location.png" alt="위치 아이콘" />
          <span>지역선택</span>
          <div className={`${styles["down-arrow-wrap"]}`}>
            <Image
              src="/img/icon/down_arrow.png"
              alt="아래방향 화살표"
              width={20}
              height={20}
            />
          </div>

        </div>
      </div>
      {<LocaitionModal show={modalShow} close={closeModal} />}
    </>
  )
}

// interface Region {
//   name: string;
//   districts: {
//     name: string;
//     subdistricts: string[];
//   }[];
// }

function LocaitionModal({ show, close }: {
  show: boolean,
  close: () => void
}) {
  const {regions} = district
  // const location = useGeolocation();
  // const [myLocat, setmyLocat] = useState({
  //   x: "0",
  //   y: "0"
  // })
  // console.log(regions);


  // useEffect(() => {

  //   if (location.loaded) {
  // // 카카오에서 주소 값 가져오기
  //     getMyLocation(String(location.coordinates?.lng), String(location.coordinates?.lat)).then(res => {
  //       // console.log(res);
  //     })

  //   }


  // }, [location.loaded])


  return (
    <div className={`${styles["modal-container"]} ${show ? styles['show'] : ''} `}>
      <div className={`${styles["modal-inner"]}`}>
        <div className={styles["modal-title-wrap"]}>
          <h4 className={styles["modal-title"]}>최근 설정 지역</h4>
          <div className={`${styles["mylocation-wrap"]}`}>
            <button>
              <Image width={24} height={24} src="/img/icon/mylocation.svg" alt="내위치설정아이콘" />
            </button>
            <span>현재위치로 설정</span>
          </div>
          <button className={`${styles["close-btn"]}`} onClick={close}>
            <Image width={24} height={24} src="/img/icon/cancel.svg" alt="닫기버튼" />
          </button>
        </div>
        <div className={`${styles["regions-list"]}`}>
          <ul className={`${styles["regions-item"]}`}>
            {regions.map((region, idx) => (
              <li key={idx}>
                {region.name.substring(0, 2)}
              </li>
            ))}
          </ul>
          <ul className={`${styles["regions-item"]}`}>
            {regions[0].districts.map((distric, disIdx) => (
              <li key={disIdx}>
                {distric.name}
              </li>
            ))}
          </ul>
          <ul className={`${styles["regions-item"]}`}>
            {regions[0].districts[0].subdistricts.map((subdistric, subDisIdx) => (
              <li key={subDisIdx}>
                {subdistric}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

