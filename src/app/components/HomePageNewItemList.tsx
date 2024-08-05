import React from 'react'
import Link from 'next/link';
import styles from '../../../styles/HomePageList.module.css'
import ProductCard from './ProductCard';

const HomePageNewItemList = () => {
  return (
    <div className={styles.listContent}>
        <span className={styles.listTitle}>Phụ kiện mới</span>
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

export default HomePageNewItemList
