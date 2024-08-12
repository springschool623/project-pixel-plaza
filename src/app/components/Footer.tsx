// components/NavigationBar.js
import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../styles/Footer.module.css'
import { faAngleDoubleRight, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={`${styles.footerItems} ${styles.footerItem_1}`}>
        <div className={styles.footerLogo}>
          <Link href='/home'>                
            <Image src="/logo.png" alt="Logo" width={200} height={50}/>
          </Link>
        </div>
          <div className={styles.footerInfo}>
            <h4>MUA HÀNG, GÓP Ý</h4>
            <p>Hotline: <span>0911153390</span></p>
            <p>Email: <span>nxuantruong@gmail.com</span></p>
            <p>Gọi qua Zalo: <span>PIXELPLAZA STORE</span></p>
            <ul className={styles.footerList}>
              <li>
                <Link href='https://facebook.com'>
                  <FontAwesomeIcon icon={faFacebook} className={styles.footerIcon}/>
                </Link>
              </li>
              <li>
                <Link href='https://google.com'>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.footerIcon}/>
                </Link>              
              </li>
              <li>
                <Link href='https://instagram.com'>
                  <FontAwesomeIcon icon={faInstagram} className={styles.footerIcon}/>
                </Link>                
              </li>
              <li>
                <Link href='https://youtube.com'>
                  <FontAwesomeIcon icon={faYoutube} className={styles.footerIcon}/>
                </Link>                 
              </li>
            </ul>          
          </div>
        </div>
        <div className={`${styles.footerItems} ${styles.footerItem_2}`}>
          <div className={styles.footerInfo}>
            <h4>ĐỊA CHỈ LIÊN HỆ</h4>
            <p>CN 1: <span>92 Pasteur, P.Bến Nghé, Q.1, TP.HCM</span></p>
            <p>CN 2: <span>66 Thành Thái, P.12, Q10, TP.HCM</span></p>
            <p>CN 3: <span>Tầng 6 Aeon Mall Bình Tân</span></p>
          </div>
          <br />
          <div className={styles.footerInfo}>
            <h4>THỜI GIAN LÀM VIỆC</h4>
            <p>Các ngày trong tuần (Thứ 2 - Thứ 7): <span>9h - 20h30</span></p>
            <p>Chủ nhật và ngày lễ: <span>9h - 19h</span></p>
          </div>
        </div>  
        <div className={`${styles.footerItems} ${styles.footerItem_3}`}>
          <div className={styles.footerInfo}>
            <h4>THÔNG TIN</h4>
            <p>Quy định chung</p>
            <p>Chính sách bảo mật thông tin</p>
            <p>Chính sách giá</p>
            <p>Chính sách vận chuyển</p>
            <p>Chính sách đổi trả</p>
            <p>Chính sách bảo hành</p>
          </div>
        </div>
        <div className={`${styles.footerItems} ${styles.footerItem_4}`}>
          <div className={ `${styles.footerInfo}`}>
            <h4>VỀ PIXELPLAZA</h4>
            <Link href="/" className={styles.footerLink}>
                <p>Liên hệ</p><FontAwesomeIcon icon={faAngleDoubleRight} className={styles.footerIcon}/>
            </Link>
            <Link href="/about-us" className={styles.footerLink}>
              <p>Giới thiệu PixelPlaza</p><FontAwesomeIcon icon={faAngleDoubleRight} className={styles.footerIcon}/>
            </Link>
            <Link href="/" className={styles.footerLink}>
                <p>PixelPlaza Shop</p><FontAwesomeIcon icon={faAngleDoubleRight} className={styles.footerIcon}/>
            </Link>
            <Link href="/" className={styles.footerLink}>
                <p>Giới thiệu PixelPlaza</p><FontAwesomeIcon icon={faAngleDoubleRight} className={styles.footerIcon}/>
            </Link>
            <Link href="/" className={styles.footerLink}>
                <p>PixelPlaza Shop</p><FontAwesomeIcon icon={faAngleDoubleRight} className={styles.footerIcon}/>
            </Link>
            <Link href="/" className={styles.footerLink}>
                <p>Phản đối - Hợp tác</p><FontAwesomeIcon icon={faAngleDoubleRight} className={styles.footerIcon}/>
            </Link>
            <Link href="/" className={styles.footerLink}>
                <p>Hướng dẫn thanh toán</p><FontAwesomeIcon icon={faAngleDoubleRight} className={styles.footerIcon}/>
            </Link>
            <Link href="/" className={styles.footerLink}>
                <p>Tuyển dụng</p><FontAwesomeIcon icon={faAngleDoubleRight} className={styles.footerIcon}/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
