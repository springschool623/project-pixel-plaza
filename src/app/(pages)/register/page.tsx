"use client";

import styles from '../../../../styles/Register.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEyeSlash, faUser, faCake, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { TuiDatePicker } from 'nextjs-tui-date-picker';
import { useState } from 'react';

export default function Register() {

    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

    // Định nghĩa hàm handleChange
    const handleChange = (date: Date | undefined) => {
        setSelectedDate(date);
    };

    return(
        <div className={styles.cover_div}>
            <form className={styles.form}>
                <h1 className={styles.h1}>Đăng ký</h1>
                <div className={styles.width}>
                    <label className={styles.label}>Họ và Tên</label>
                    <div className={styles.text_input}>
                        <FontAwesomeIcon icon={faUser} className={styles.icon}/>
                        <input type="text" className={styles.text_field_width} placeholder="Nhập họ tên..."></input>
                    </div>
                </div>
                <div className={styles.width}>
                    <label className={styles.label}>Email</label>
                    <div className={styles.text_input}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                        <input type="text" className={styles.text_field_width} placeholder="Nhập email..."></input>
                    </div>
                </div>
                <div className={styles.width}>
                    <label className={styles.label}>Ngày sinh</label>
                    <div className={styles.text_input}>
                        <FontAwesomeIcon icon={faCake} className={styles.icon}/>
                        <TuiDatePicker
                            handleChange={handleChange}
                            date={selectedDate}
                            fontSize={16}
                            inputWidth={500}
                            margin={30}
                        />
                        <FontAwesomeIcon icon={faCalendar} className={styles.iconRight}/>
                    </div>
                </div>
                <div className={styles.width}>
                    <label className={styles.label}>Mật khẩu</label>
                    <div className={styles.text_input}>
                        <FontAwesomeIcon icon={faLock} className={styles.icon}/>
                        <input type="text" className={styles.text_field_width} placeholder="Nhập mật khẩu..."></input>
                        <FontAwesomeIcon icon={faEyeSlash} className={styles.iconRight}/>
                    </div>
                </div>
                <div className={styles.width}>
                    <label className={styles.label}>Nhập lại mật khẩu</label>
                    <div className={styles.text_input}>
                        <FontAwesomeIcon icon={faLock} className={styles.icon}/>
                        <input type="text" className={styles.text_field_width} placeholder="Nhập lại mật khẩu..."></input>
                        <FontAwesomeIcon icon={faEyeSlash} className={styles.iconRight}/>
                    </div>
                </div>
                <div className={styles.width}>
                    <button className={styles.btn}>Đăng ký</button>
                </div>
                <div className={styles.divider}>
                    <p>Hoặc</p>
                </div>
                <div className={styles.width}>
                    <a href="https://www.google.com.vn/" className={styles.extra_btn}>
                        <div className={styles.div_text_logo}>
                            <Image src="/images/google_icon.png" width={30} height={30} alt="google"></Image>
                            <p className={styles.p_btn}>Tiếp tục bằng Google</p>
                        </div>
                    </a>
                </div>
                <div className={styles.width}>
                    <a href="https://www.google.com.vn/" className={styles.extra_btn}>
                        <div className={styles.div_text_logo}>
                            <Image src="/images/facebook_icon.png" width={30} height={30} alt="google"></Image>
                            <p className={styles.p_btn}>Tiếp tục bằng Facebook</p>
                        </div>
                    </a>
                </div>
                <div>
                    <p>Đã có tài khoản? <Link href="/login " className={styles.signup_btn}>Đăng nhập</Link></p>
                </div>
            </form>
        </div>
    )
}