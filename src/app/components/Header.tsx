// components/NavigationBar.js
import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faUserCircle, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Image src="/logo.png" alt="Logo" width={200} height={50}/>
      </div>
      <div className={styles.headerSearchbar}>
        <input type="text" className={styles.searchbarInput}/>
        <button  className={styles.searchbarButton}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchbarIcon}/>
        </button>
      </div>
      <ul className={styles.headerList}>
        <li className={styles.headerItem}>
          <Link href="/user">
              <FontAwesomeIcon icon={faHeart} className={styles.headerIcon}/>
          </Link>
        </li>
        <li className={styles.headerItem}>
          <Link href="/user">
              <FontAwesomeIcon icon={faUserCircle} className={styles.headerIcon}/>
          </Link>
        </li>
        <li className={styles.headerItem}>
          <Link href="/pages/cart">
              <FontAwesomeIcon icon={faShoppingCart} className={styles.headerIcon}/>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
