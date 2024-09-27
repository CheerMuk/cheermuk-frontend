"use client";
import Image from "next/image";
import styles from '../styles/components/TopAppbar.module.css';
import { useState } from "react";

function goback() {
  window.history.back();
}

export default function TopAppbar() {
  const [reportReady, setReportReady] = useState<boolean>(false)
  const [reportFormModal, setreportFormModal] = useState<boolean>(false);

  const closeFormModal = () => {
    setreportFormModal(false);
  }

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
              }else {
                setReportReady(false);
                setreportFormModal(true);
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
      <ReportModal isShow={reportFormModal} setShow={closeFormModal} />
    </div>
  );
}

interface reportFormType {
  report : string,
  
}

function ReportModal({ isShow, setShow }: {
  isShow: boolean,
  setShow : () => void
}) {

  const [reportFormData, setReportFormData] = useState<reportFormType>({
    "report": ""
  })

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // const target = e.target as HTMLFormElement
    // const formData = new FormData(target);


    // console.dir(formData.values());
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target
    setReportFormData({
      ...reportFormData,
      report : target.value
    })
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
          <input type="radio" name="report" value={'욕설'} onChange={onChange} />
          욕설
        </label>
        <label className={styles['report-modal-form-label']}>
          <input type="radio" name="report" value={'개인정보 노출'} onChange={onChange} />
          개인정보 노출
        </label>
        <label className={styles['report-modal-form-label']}>
          <input type="radio" name="report" value={'불법 정보'} onChange={onChange} />
          불법 정보
        </label>
        <label className={styles['report-modal-form-label']}>
          <input type="radio" name="report" value={'청소년에게 유해한 내용'} onChange={onChange} />
          청소년에게 유해한 내용
        </label>
        <label className={styles['report-modal-form-label']}>
          <input type="radio" name="report" value={'음란물'} onChange={onChange} />
          음란물
        </label>
        <div className={`${styles['report-btn-wrap']}`}>
          <button 
            className={`${styles['report-btn']} ${styles['cancle']}`} 
            type="button"
            onClick={() => {
              setShow();
            }}
          >취소</button>
          <button 
            disabled={reportFormData.report.length > 0 ? false : true} 
            className={`${styles['report-btn']} ${styles['success']} ${reportFormData.report.length > 0 ? styles['active'] : ''}`} 
            type="submit"
            onClick={() => {
              setShow();
            }}
          >신고하기</button>
        </div>
      </form>
    </div>
  </div>
}