import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/HomePageList.module.css';
import ProductCard from './ProductCard';

const HomePageNewItemList = () => {
    // Cố định số lượng sản phẩm muốn hiển thị
    const productCount = 10;

    const renderProductCards = () => {
      const cards = [];
      for (let i = 0; i < productCount; i++) {
        cards.push(<ProductCard key={i} />);
      }
      return cards;
    };

  return (
    <div className={styles.listContent}>
      <div className={styles.listCover}>
        {renderProductCards()}
      </div>
    </div>
  );
};

export default HomePageNewItemList;