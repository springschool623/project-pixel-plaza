import React from 'react'
import Image from "next/image";

import Link from 'next/link';
import styles from '../../../styles/ProductCard.module.css'

const ProductCard = () => {
  return (
      <div className={styles.cardWrapper}>
        <div className={styles.cardImg}>
          <Image src="/proitem1.jpg" alt="Sản phẩm" width={290} height={290}></Image>
        </div>
        <div className={styles.cardInfo}>
            <span className={styles.productName}>XBOX Series Wireless Controller - Fire Vapor</span>
            <span className={styles.productPrice}>1.850.000đ</span>
        </div>
        <div className={styles.cardBtn}>
            <button className={styles.buyBtn}>Mua ngay</button>
        </div>
      </div>
  )
};

export default ProductCard
