"use client";
import Image from "next/image";
import styles from '../styles/components/TopAppbar.module.css';
import { useState } from "react";

function goback() {
  window.history.back();
}

export default function TopAppbar() {
  const [reportReady, setReportReady] = useState(false)

  return (
    <div className={`${styles['container']}`}>
      <div className={`${styles['inner']}`}>
        <Image className={styles['back-btn']} width={24} height={24} src={'/img/icon/back_btn.svg'} alt="뒤로가기" onClick={goback} />
        <div className={`${styles['report-wrap']}`}>
          <Image
            onClick={(e) => {
              e.stopPropagation()
              setReportReady(true)
            }}
            width={24}
            height={24}
            src={'/img/icon/report.svg'}
            alt="메뉴목록"
            style={{
              cursor: 'pointer'
            }}
          />
          <div
            className={`${styles['report-menu']} ${reportReady ? styles['active'] : ''}`}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              const target = e.target as HTMLElement;

              if (target.dataset.name !== '신고') {
                setReportReady(false);
              }
            }}
          >
            <div className={`${styles['report-menu-inner']}`} data-name='신고'>
              게시물 신고
              <Image width={18} height={18} src={'/img/icon/waring.svg'} alt="경고 아이콘" />
            </div>

          </div>
        </div>
      </div>
      <ReportModal isShow={true} />
    </div>
  );
}



function ReportModal({ isShow }: {
  isShow: boolean
}) {

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // const target = e.target as HTMLFormElement
    // const formData = new FormData(target);


    // console.dir(formData.values());
  }

  return <div
    className={`${styles['report-modal']} ${isShow ? styles['show'] : ''}`}
  >
    <div
    className={`${styles['report-modal-inner']}`}>
      <form
      className={`${styles['report-modal-form']}`}
       onSubmit={onSubmit}>
        <h2 className={styles['report-modal-title']}>게시물을 신고하시겠습니까?</h2>
        <p className={styles['report-modal-form-info']}>신고사유</p>
        <label className={styles['report-modal-form-label']}>
          <input type="radio" name="report" value={'욕설'} />
          욕설
        </label>
        <label className={styles['report-modal-form-label']}>
          <input type="radio" name="report" value={'개인정보 노출'} />
          개인정보 노출
        </label>
        <label className={styles['report-modal-form-label']}>
          <input type="radio" name="report" value={'불법 정보'} />
          불법 정보
        </label>
        <label className={styles['report-modal-form-label']}>
          <input type="radio" name="report" value={'청소년에게 유해한 내용'} />
          청소년에게 유해한 내용
        </label>
        <label className={styles['report-modal-form-label']}>
          <input type="radio" name="report" value={'음란물'} />
          음란물
        </label>
        <div>
          <button type="button">취소</button>
          <button type="submit">신고하기</button>
        </div>
      </form>
    </div>
  </div>
}