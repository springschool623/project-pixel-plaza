import React from 'react'
import Link from 'next/link';
import styles from '../../../styles/HomePageList.module.css'
import ProductCard from './ProductCard';

const HomePageNewProductList = () => {
  return (
    <div className={styles.listContent}>
        <span className={styles.listTitle}>Sản phẩm mới</span>
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

export default HomePageNewProductList
