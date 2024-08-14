import React, { useState } from 'react';
import styles from '../../../styles/HomePageList.module.css';
import ProductCard from './ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const RelatedProductList = () => {
  const productCount = 5;  // Number of products to display at a time
  const totalProducts = 16; // Total number of products (replace with actual number if dynamic)
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - productCount);
    }
  };

  const handleNext = () => {
    if (currentIndex + productCount < totalProducts) {
      setCurrentIndex(currentIndex + productCount);
    }
  };

  const renderProductCards = () => {
    const cards = [];
    for (let i = currentIndex; i < currentIndex + productCount && i < totalProducts; i++) {
      cards.push(<ProductCard key={i} />);
    }
    return cards;
  };

  return (
    <div className={styles.listWrapper}>

      <div className={styles.listCover}>
        <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={styles.prevButton}
        >
        <FontAwesomeIcon icon={faAngleLeft} className={styles.detailAddFavorite}/>
        </button>

        {renderProductCards()}

        <button
        onClick={handleNext}
        disabled={currentIndex + productCount >= totalProducts}
        className={styles.nextButton}
        >
        <FontAwesomeIcon icon={faAngleRight} className={styles.detailAddFavorite}/>
        </button>
      </div>

    </div>
  );
};

export default RelatedProductList;
