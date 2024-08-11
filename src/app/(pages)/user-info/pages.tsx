import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../../styles/UserInfo.module.css';
import { faCircleUser, faClockRotateLeft, faHeart, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function UserInfo() {
    return(
        <div className={styles.cover}>
            <p className={styles.header}>Thông tin cá nhân</p>
            <div className={styles.divider}></div>
            <div className={styles.cover_box}>
                <div className={styles.row}>
                    <div className={styles.width_column}>
                        <label className={styles.label}>Họ và Tên</label>
                        <input type="text" className={styles.text_field_width}></input>
                    </div>
                    <div className={styles.width_column}>
                        <label className={styles.label}>Giới tính</label>
                        <input type="text" className={styles.text_field_width}></input>
                    </div>
                </div>
            </div>
            <div className={styles.width}>
                <label className={styles.label}>Email</label>
                <input type="text" className={styles.text_field_width_full}></input>
            </div>
            <div className={styles.cover_box}>
                <div className={styles.row}>
                    <div className={styles.width_column}>
                        <label className={styles.label}>Số điện thoại</label>
                        <input type="text" className={styles.text_field_width}></input>
                    </div>
                    <div className={styles.width_column}>
                        <label className={styles.label}>Ngày sinh</label>
                        <input type="text" className={styles.text_field_width}></input>
                    </div>
                </div>
            </div>
            <div className={styles.width}>
                <label className={styles.label}>Địa chỉ</label>
                <input type="text" className={styles.text_field_width_full}></input>
            </div>

            <div className={styles.updateBox}>
                <button className={styles.updateBtn}>Cập nhật</button>
            </div>
        </div>
    )
}