// components/NavigationBar.js
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../styles/Footer.module.css'
import { faAngleDoubleRight, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={`${styles.footerItems} ${styles.footerItem_1}`}>
          <div className={styles.footerLogo}></div>
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
            <p>Chi nhánh 1: <span>92 Pasteur, P.Bến Nghé, Q.1, TP.HCM</span></p>
            <p>Chi nhánh 2: <span>66 Thành Thái, P.12, Q10, TP.HCM</span></p>
            <p>Chi nhánh 3: <span>Kiot X01114 Sunrise Plaza 27 Nguyễn Hữu Thọ, P.Tân Hưng, Q.7, TP.HCM</span></p>
            <p>Chi nhánh 4: <span>Tầng 6 Aeon Mall Bình Tân</span></p>
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
          <div className={styles.footerInfo}>
            <h4>VỀ PIXELPLAZA</h4>
            <p>Liên hệ</p>
            <p>Giới thiệu PixelPlaza</p>
            <p>PixelPlaza Shop<FontAwesomeIcon icon={faAngleDoubleRight} className={styles.footerIcon}/></p>
            <p>Phản đối - Hợp tác</p>
            <p>Hướng dẫn thanh toán</p>
            <p>Tuyển dụng</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
