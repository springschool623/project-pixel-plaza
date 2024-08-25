// components/NavigationBar.js
import Link from 'next/link'
import styles from '../../../styles/NavigationBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faShoppingCart,
  faUserCircle,
  faSearch,
  faHome,
  faList,
  faHeadset,
  faAngleDown,
  faAngleRight,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons'
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons'
import NavBarContent from './NavBarContent'

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/home" className={styles.navLink}>
              <FontAwesomeIcon icon={faHome} className={styles.navbarIcon} />
              <span>Trang chủ</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/shop" className={styles.navLink}>
              <FontAwesomeIcon
                icon={faShoppingBag}
                className={styles.navbarIcon}
              />
              <span>Cửa hàng</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/shop/xbox" className={styles.navLink}>
              <FontAwesomeIcon icon={faXbox} className={styles.navbarIcon} />
              <span>Xbox</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/shop/playstation" className={styles.navLink}>
              <FontAwesomeIcon
                icon={faPlaystation}
                className={styles.navbarIcon}
              />
              <span>Playstation</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/shop" className={styles.navLink}>
              <FontAwesomeIcon icon={faList} className={styles.navbarIcon} />
              <div className={styles.navbarItemDropdown}>
                <span>Thể loại</span>
              </div>
            </Link>
            <NavBarContent />
          </li>
          <li className={styles.navItem}>
            <Link href="/shop" className={styles.navLink}>
              <FontAwesomeIcon icon={faHeadset} className={styles.navbarIcon} />
              <span>Gaming Gear</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar
