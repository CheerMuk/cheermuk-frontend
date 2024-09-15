"use client";
import { useState } from "react";
import styles from "../styles/components/searchComponent.module.css";
import Image from "next/image";

export default function SearchComponent() {
  const [modalActive, setmodalActive] = useState<boolean>(false)
  const [isActive, setisActive] = useState<string>('최신순')

  const closeModal = () => {
    setmodalActive(false)
  }

  const setFilter = (e: React.MouseEvent<HTMLLIElement> , str:string) => {
    e.stopPropagation(); 
    setisActive(str);
    setmodalActive(false)
  }
  return (
    <div className={`${styles['container']}`}>
      <div className={`${styles["sort-box"]}`} onClick={() => setmodalActive(true)}>
        <Image
        src="/img/icon/listup.svg" 
        alt="리스트 아이콘"
        width={24}
        height={24}
        style={{
          objectFit :"contain",

        }}
        
        /> 
        
        <span>{isActive}</span>
        <Image 
        className={`${styles["small-img"]}`} 
        src="/img/icon/down_arrow.png" 
        alt="아래 화살표" 
        width={20}
        height={20}
        />
        <FilterModal isActive={modalActive} closeModal={closeModal} setFilter={setFilter}/>
      </div>
      <div className={`${styles["filter-box"]}`}>
        <span>거리 반경</span>
        <Image 
        className={`${styles["small-img"]}`} 
        src="/img/icon/down_arrow.png" 
        alt="아래 화살표" 
        width={20}
        height={20}
        />
      </div>
      <div className={`${styles["filter-box"]}`}>
        <span>음식 종류</span>
        <Image 
        className={`${styles["small-img"]}`} 
        src="/img/icon/down_arrow.png" 
        alt="아래 화살표" 
        width={20}
        height={20}
        />
      </div>
    </div>
  );
}

interface FilterModalProps {
  isActive: boolean;
  closeModal: () => void;
  setFilter: (e: React.MouseEvent<HTMLLIElement> ,str:string) => void;
}

function FilterModal({ isActive, closeModal, setFilter }: FilterModalProps) {
  return (
    <>
      <ul className={`${styles['modal-list']} ${isActive ? styles['modal-active'] : ''}   `}>
        <li className={`${styles['filter-item']}`} onClick={(e) => {setFilter(e, '최신순')}}>
          최신순
        </li>
        <li className={`${styles['filter-item']}`} onClick={(e) => {setFilter(e,'저장 많은 순')}}>
          저장 많은 순
        </li>
        <li className={`${styles['filter-item']}`} onClick={(e) => {setFilter(e,'조회수 많은 순')}}>
          조회수 많은 순
        </li>
        <li className={`${styles['filter-item']}`} onClick={(e) => {setFilter(e,'좋아요 많은 순')}}>
          좋아요 많은 순
        </li>
      </ul>
      <div className={`${styles['modal-back']} ${isActive ? styles['modal-active'] : ''}`} onClick={(e) => {  e.stopPropagation(); closeModal()}}></div>
    </>
  )
}