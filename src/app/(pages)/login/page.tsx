"use client";

import styles from '../../../../styles/Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function Login() {
    const router = useRouter();

    const loginToUserProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của form
        router.push('/user-profile');
    }

    return(
        <div className={styles.cover_div}>
            <form className={styles.form}>
                <h1 className={styles.h1}>Đăng nhập</h1>
                <div className={styles.width}>
                    <label className={styles.label}>Email</label>
                    <div className={styles.text_input}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                        <input type="text" className={styles.text_field_width}></input>
                    </div>
                </div>
                <div className={styles.width}>
                    <label className={styles.label}>Mật khẩu</label>
                    <div className={styles.text_input}>
                        <FontAwesomeIcon icon={faLock} className={styles.icon}/>
                        <input type="text" className={styles.text_field_width}></input>
                        <FontAwesomeIcon icon={faEyeSlash} className={styles.iconRight}/>
                    </div>
                </div>
                <div className={styles.remember}>
                    <input type="checkbox" id="rem" className={styles.remember_pass}></input>
                    <label id="rem">Nhớ mật khẩu</label>
                </div>
                <div className={styles.width}>
                    <button className={styles.btn} onClick={loginToUserProfile}>Đăng nhập</button>
                </div>
                <Link href="" className={styles.forget_pass}>
                    Quên mật khẩu?
                </Link>
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
                    <p>Chưa có tài khoản? <Link href="/register" className={styles.signup_btn}>Đăng ký</Link></p>
                </div>
            </form>
        </div>
    )
}