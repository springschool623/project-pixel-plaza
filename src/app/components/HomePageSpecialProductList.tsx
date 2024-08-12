import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/HomePageList.module.css';
import ProductCard from './ProductCard';

const HomePageSpecialProductList = () => {
  // Cố định số lượng sản phẩm muốn hiển thị
  const productCount = 5;

  const renderProductCards = () => {
    const cards = [];
    for (let i = 0; i < productCount; i++) {
      cards.push(<ProductCard key={i} />);
    }
    return cards;
  };

  return (
    <div className={styles.listContent}>
        <span className={styles.listTitle}>Sản phẩm nổi bật</span>
        <div className={styles.listCover}>
          {renderProductCards()}
        </div>
    </div>
  );
};

export default HomePageSpecialProductList;
