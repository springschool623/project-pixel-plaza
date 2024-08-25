import React from 'react'
import Image from 'next/image'

import Link from 'next/link'
import styles from '../../../styles/ProductCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const ProductCard = () => {
  const productId = '12345'

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImg}>
        <Link href={`/products/${productId}`}>
          <Image
            src="/proitem1.jpg"
            alt="Sản phẩm"
            width={200}
            height={200}
          ></Image>
        </Link>
      </div>
      <div className={styles.cardInfo}>
        <span className={styles.productName}>
          XBOX Series Wireless Controller - Fire Vapor
        </span>
        <span className={styles.productPrice}>1.850.000đ</span>
      </div>
      <div className={styles.cardBtn}>
        <button className={styles.buyBtn}>
          <span>Add to</span>
          <FontAwesomeIcon
            icon={faCartArrowDown}
            className={styles.detailAddFavorite}
          />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
