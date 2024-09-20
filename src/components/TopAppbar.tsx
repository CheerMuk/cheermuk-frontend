"use client";
import Image from "next/image";
import styles from '../styles/components/TopAppbar.module.css';
export default function TopAppbar() {
  return (
    <div className={`${styles['container']}`}>
      <div className={`${styles['inner']}`}>
        <Image width={24} height={24} src={'/img/icon/back_btn.svg'} alt="뒤로가기" />
        <div>
          <Image width={24} height={24} src={'/img/icon/report.svg'} alt="메뉴목록" />
          <div className={`${styles['report-menu']}`}>
            <div>게시물 신고</div>
          </div>
        </div>
      </div>
    </div>
  );
}