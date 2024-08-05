import React from 'react'
import Link from 'next/link';
import styles from '../../../styles/HomePageList.module.css'
import ProductCard from './ProductCard';

const HomePageSpecialProductList = () => {
  return (
    <div className={styles.listContent}>
        <span className={styles.listTitle}>Sản phẩm nổi bật</span>
        <div className={styles.listCover}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
    </div>
  )
};

export default HomePageSpecialProductList
