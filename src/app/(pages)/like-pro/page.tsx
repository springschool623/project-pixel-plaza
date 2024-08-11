"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../../styles/LikeProduct.module.css';
import { faCircleUser, faClockRotateLeft, faHeart, faRightFromBracket, faX } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '@/app/components/ProductCard';

export default function LikeProduct() {
    return(
        <div className={styles.cover}>
            <p className={styles.header}>Lịch sử mua hàng</p>
            <div className={styles.divider}></div>
            <div className={styles.likeProduct}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}