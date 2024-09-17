"use client";
import { useState } from "react";
import styles from "../styles/components/searchComponent.module.css";
import Image from "next/image";

export default function SearchComponent() {
  const [modalActive, setmodalActive] = useState<boolean>(false)
  const [cateModal, setcateModal] = useState<boolean>(false)
  const [isActive, setisActive] = useState<string>('최신순')

  const closeModal = () => {
    setmodalActive(false)
  }
  const closeCateModal = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;  // e.target을 HTMLElement로 캐스팅
    // console.log(target.dataset['name']);   
    if(target.dataset['name'] && target.dataset['name'] == 'category-modal') {
      setcateModal(false);
    }
    
  }

  const setFilter = (e: React.MouseEvent<HTMLLIElement>, str: string) => {
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
            objectFit: "contain",

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
        <FilterModal isActive={modalActive} closeModal={closeModal} setFilter={setFilter} />
      </div>
      <div className={`${styles["filter-box"]}`} onClick={() => {setcateModal(true)}}>
        <span>거리 반경</span>
        <Image
          className={`${styles["small-img"]}`}
          src="/img/icon/down_arrow.png"
          alt="아래 화살표"
          width={20}
          height={20}
        />
      </div>
      <div className={`${styles["filter-box"]}`}  onClick={() => {setcateModal(true)}}>
        <span>음식 종류</span>
        <Image
          className={`${styles["small-img"]}`}
          src="/img/icon/down_arrow.png"
          alt="아래 화살표"
          width={20}
          height={20}
        />
      </div>
      <CategoryModal isActive={cateModal} closeModal={closeCateModal}/>
    </div>
  );
}

interface FilterModalProps {
  isActive: boolean;
  closeModal: () => void;
  setFilter: (e: React.MouseEvent<HTMLLIElement>, str: string) => void;
}

function FilterModal({ isActive, closeModal, setFilter }: FilterModalProps) {
  return (
    <>
      <ul className={`${styles['modal-list']} ${isActive ? styles['modal-active'] : ''}   `}>
        <li className={`${styles['filter-item']}`} onClick={(e) => { setFilter(e, '최신순') }}>
          최신순
        </li>
        <li className={`${styles['filter-item']}`} onClick={(e) => { setFilter(e, '저장 많은 순') }}>
          저장 많은 순
        </li>
        <li className={`${styles['filter-item']}`} onClick={(e) => { setFilter(e, '조회수 많은 순') }}>
          조회수 많은 순
        </li>
        <li className={`${styles['filter-item']}`} onClick={(e) => { setFilter(e, '좋아요 많은 순') }}>
          좋아요 많은 순
        </li>
      </ul>
      <div className={`${styles['modal-back']} ${isActive ? styles['modal-active'] : ''}`} onClick={(e) => { e.stopPropagation(); closeModal() }}></div>
    </>
  )
}

interface CategoryModalProps {
  isActive: boolean,
  closeModal: (e: React.MouseEvent<HTMLElement>) => void,
}

function CategoryModal({isActive, closeModal}: CategoryModalProps) {
  const [selectStreet, setselectStreet] = useState<string[]>([])
  const [selectFood, setselectFood] = useState<string[]>([])

  console.log('catemodal', isActive);

  const streetAdd = (e: React.MouseEvent<HTMLButtonElement> ,str: string) => {
    e.stopPropagation();
    setselectStreet(prev => {
      const prevarray = [...prev]

      return [...prevarray, str]
    })
  }

  const streetDel = (e: React.MouseEvent<HTMLElement> ,str: string) => {
    e.stopPropagation();
    setselectStreet(prev => {
      const prevarray = [...prev]
      return prevarray.filter(item => item !== str);
    })
  }

  const foodAdd = (e: React.MouseEvent<HTMLButtonElement> ,str: string) => {
    e.stopPropagation();
    setselectFood(prev => {
      const prevarray = [...prev]

      return [...prevarray, str]
    })
  }

  const foodDel = (e: React.MouseEvent<HTMLElement> ,str: string) => {
    e.stopPropagation();
    setselectFood(prev => {
      const prevarray = [...prev]
      return prevarray.filter(item => item !== str);
    })
  }

  const clear = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setselectFood([])
    setselectStreet([])
  }

  return (
    <div 
    className={`${styles["category-modal"]} ${isActive ? styles['show'] : ''}`} 
    data-name={'category-modal'}
    onClick={(e) => {
      closeModal(e)
    }}>
      <div className={`${styles["category-modal-inner"]}`}>
        <div>
          <h4 className={`${styles["category-modal-title"]}`}>거리 반경 선택</h4>
          <ul className={`${styles['category-modal-btn-wrap']}`}>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectStreet.includes('500m') ? styles['active'] : ''}`}
                onClick={(e) => { streetAdd(e, '500m') }}
              >
                500m
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectStreet.includes('1km') ? styles['active'] : ''}`}
                onClick={(e) => { streetAdd(e,'1km') }}
              >
                1km
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectStreet.includes('2km') ? styles['active'] : ''}`}
                onClick={(e) => { streetAdd(e,'2km') }}
              >
                2km
              </button>
            </li>
            <li>
              <button className={`${styles['category-modal-btn']} ${selectStreet.includes('3km') ? styles['active'] : ''}`}
                onClick={(e) => { streetAdd(e,'3km') }}
              >
                3km
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={`${styles["category-modal-title"]}`}>음식 종류 선택</h4>
          <ul className={`${styles['category-modal-btn-wrap']}`}>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('한식') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'한식') }}
              >
                한식
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('양식') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'양식') }}
              >
                양식
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('일식') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'일식') }}
              >
                일식
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('중식') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'중식') }}
              >
                중식
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('분식') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'분식') }}
              >
                분식
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('고깃집') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'고깃집') }}>
                고깃집
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('치킨') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'치킨') }}
              >
                치킨
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('피자') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'피자') }}
              >
                피자
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('멕시코 • 남미') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'멕시코 • 남미') }}
              >
                멕시코 • 남미
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('카페') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'카페') }}
              >
                카페
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('요리주점') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'요리주점') }}
              >
                요리주점
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('뷔페') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'뷔페') }}
              >
                뷔페
              </button>
            </li>
            <li>
              <button
                className={`${styles['category-modal-btn']} ${selectFood.includes('아시안음식') ? styles['active'] : ''}`}
                onClick={(e) => { foodAdd(e,'아시안음식') }}
              >
                아시안음식
              </button>
            </li>
          </ul>
        </div>
        {(selectStreet.length > 0 || selectFood.length > 0) && <ul className={`${styles['category-select-wrap']}`}>
          <li onClick={(e) => {clear(e)}}>
            <Image width={24} height={24} src="/img/icon/refresh.svg" alt="refresh icon" />
          </li>
          {selectStreet.map((item, idx) => (
            <li key={idx} className={`${styles["category-select"]}`} onClick={(e) => {
              streetDel(e, item)
            }}>
              {item}
              <Image width={24} height={24} src="/img/icon/btn_del.svg" alt="삭제" />
            </li>
          ))}
          {selectFood.map((food, foodidx) => (
            <li key={foodidx} className={`${styles["category-select"]}`} onClick={(e) => {
              foodDel(e, food)
            }}>
              {food}
              <Image width={24} height={24} src="/img/icon/btn_del.svg" alt="삭제" />
            </li>
          ))}
        </ul>}
        <button className={`${styles["complate-btn"]}`}>
          결과 보기
        </button>
      </div>
    </div>
  )
}