import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/HomePageList.module.css';
import ProductCard from './ProductCard';

const HomePageNewItemList = () => {
  const totalProducts = 13; // Tổng số ProductCard bạn muốn hiển thị
  const products = Array.from({ length: totalProducts });

  // Chia sản phẩm thành các hàng, mỗi hàng có tối đa 4 sản phẩm
  const rows = [];
  for (let i = 0; i < products.length; i += 4) {
    rows.push(products.slice(i, i + 4));
  }

  return (
    <div className={styles.listContent}>
      {rows.map((row, rowIndex) => (
        <div className={styles.listCover} key={rowIndex}>
          {row.map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default HomePageNewItemList;
