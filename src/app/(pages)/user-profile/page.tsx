'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../../../styles/UserProfile.module.css'
import {
  faCircleUser,
  faClockRotateLeft,
  faHeart,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import UserInfo from '../user-info/pages'
import { useState } from 'react'
import HistoryOrder from '../history/page'
import LikeProduct from '../fav_pro/page'

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('account')

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return <UserInfo />
      case 'history':
        return <HistoryOrder />
      case 'like':
        return <LikeProduct />
      default:
        return null
    }
  }

  return (
    <div>
      <div className={styles.userProfileHeader}>
        <h1 className={styles.userProfileTitle}>Tài khoản của tôi</h1>
      </div>
      <div className={styles.userProfileWrapper}>
        <div className={styles.userProfileLeftNav}>
          <div
            className={styles.infoText}
            onClick={() => setActiveTab('account')}
          >
            <FontAwesomeIcon icon={faCircleUser} className={styles.icon} />
            <p>Tài khoản</p>
          </div>
          <div className={styles.infoText} onClick={() => setActiveTab('like')}>
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            <p>Yêu thích</p>
          </div>
          <div
            className={styles.infoText}
            onClick={() => setActiveTab('history')}
          >
            <FontAwesomeIcon icon={faClockRotateLeft} className={styles.icon} />
            <p>Lịch sử mua hàng</p>
          </div>
          <Link href="/home" className={styles.link}>
            <div className={styles.infoText}>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className={styles.icon}
              />
              <p>Đăng xuất</p>
            </div>
          </Link>
        </div>
        <div className={styles.userProfileContainer}>{renderContent()}</div>
      </div>
    </div>
  )
}
