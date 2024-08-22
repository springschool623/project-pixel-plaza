// components/NavigationBar.js
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faShoppingCart,
  faUserCircle,
  faSearch,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/Header.module.css'
import ToggleDarkMode from './ToggleDarkMode'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Link href="/">
          <Image
            src="/images/logo/pixel_plaza_title_white.png"
            alt="Logo"
            width={2000}
            height={500}
          />
        </Link>
      </div>
      <div className={styles.headerSearchbar}>
        <input
          type="text"
          className={styles.searchbarInput}
          placeholder="Tôi muốn tìm..."
        />
        <button className={styles.searchbarButton}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchbarIcon} />
        </button>
      </div>
      <ul className={styles.headerList}>
        <ToggleDarkMode />
        <li className={styles.headerItem}>
          <Link href="/login">
            <FontAwesomeIcon
              icon={faUserCircle}
              className={styles.headerIcon}
            />
          </Link>
        </li>
        <li className={styles.headerItem}>
          <Link href="/cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className={styles.headerIcon}
            />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
