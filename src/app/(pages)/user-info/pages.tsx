import styles from '../../../../styles/UserInfo.module.css'

export default function UserInfo() {
  return (
    <div className={styles.userInfoWrapper}>
      <h2 className={styles.userInfoTitle}>Thông tin cá nhân</h2>
      <div className={styles.userInfoContainer}>
        <div className={styles.userInfoInput}>
          <div className={styles.userInfoInputWrapper}>
            <label className={styles.inputLabel}>Họ và Tên</label>
            <input type="text" className={styles.inputField}></input>
          </div>
          <div
            className={`${styles.userInfoInputWrapper} ${styles.userInfoInputWrapper_Gender}`}
          >
            <label className={styles.inputLabel}>Giới tính</label>
            <input type="text" className={styles.inputField}></input>
          </div>
        </div>
        <div className={styles.userInfoInput}>
          <div className={styles.userInfoInputWrapper}>
            <label className={styles.inputLabel}>Email</label>
            <input type="text" className={styles.inputField}></input>
          </div>
        </div>
        <div className={styles.userInfoInput}>
          <div className={styles.userInfoInputWrapper}>
            <label className={styles.inputLabel}>Số điện thoại</label>
            <input type="text" className={styles.inputField}></input>
          </div>
          <div
            className={`${styles.userInfoInputWrapper} ${styles.userInfoInputWrapper_DOB}`}
          >
            <label className={styles.inputLabel}>Ngày sinh</label>
            <input type="text" className={styles.inputField}></input>
          </div>
        </div>
        <div className={styles.userInfoInput}>
          <div className={styles.userInfoInputWrapper}>
            <label className={styles.inputLabel}>Địa chỉ</label>
            <input type="text" className={styles.inputField}></input>
          </div>
        </div>
        <button className={styles.updateBtn}>Cập nhật</button>
      </div>
    </div>
  )
}
