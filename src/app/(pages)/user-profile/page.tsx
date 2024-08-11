"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../../styles/UserProfile.module.css';
import { faCircleUser, faClockRotateLeft, faHeart, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import UserInfo from '../user-info/pages';
import { useState } from 'react';
import HistoryOrder from '../history/page';
import LikeProduct from '../like-pro/page';

export default function UserProfile() {

    const [activeTab, setActiveTab] = useState('account');

    const renderContent = () => {
        switch (activeTab) {
            case 'account':
                return <UserInfo/>;
            case 'history':
                return <HistoryOrder/>;
            case 'like':
                return <LikeProduct/>;
            default:
                return null;
        }
    }

    return(
        <div>
            <div className={styles.box}>
                <h1 className={styles.header}>Tài khoản của tôi</h1>
            </div>
            <div className={styles.column}>
                <div>
                    <p className={styles.infoText} onClick={() => setActiveTab('account')}>
                        <FontAwesomeIcon icon={faCircleUser} className={styles.icon}/>Tài khoản
                    </p>
                    <p className={styles.infoText} onClick={() => setActiveTab('history')}>
                        <FontAwesomeIcon icon={faClockRotateLeft} className={styles.icon}/>Lịch sử mua hàng
                    </p>
                    <p className={styles.infoText} onClick={() => setActiveTab('like')}>
                        <FontAwesomeIcon icon={faHeart} className={styles.icon}/>Yêu thích
                    </p>
                    <br></br>
                    <br></br>
                    <Link href="" className={styles.link}>
                        <p className={styles.infoText}><FontAwesomeIcon icon={faRightFromBracket} className={styles.icon}/>Đăng xuất</p>
                    </Link>
                </div>
                <div>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}