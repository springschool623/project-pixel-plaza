import React, { useEffect, useState } from 'react';
import styles from '../../../styles/PriceSlider.module.css';

const PriceSlider: React.FC = () => {
  const [range1, setRange1] = useState(0);
  const [range2, setRange2] = useState(10000000);

  useEffect(() => {
    updateSlider();
  }, [range1, range2]);

  const updateSlider = () => {
    const min = Math.min(range1, range2);
    const max = Math.max(range1, range2);

    const rangePercent1 = (min / 10000000) * 100;
    const rangePercent2 = (max / 10000000) * 100;

    const sliderTrack = document.querySelector('.slider-track') as HTMLElement;
    if (sliderTrack) {
      sliderTrack.style.background = `linear-gradient(to right, #ddd ${rangePercent1}%, #007bff ${rangePercent1}%, #007bff ${rangePercent2}%, #ddd ${rangePercent2}%)`;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className={styles.priceSlider}>
      <span>Giá:</span>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min="0"
          max="10000000"
          step={1000}
          value={range1}
          onChange={(e) => setRange1(Number(e.target.value))}
          className={styles.slider}
        />
        <input
          type="range"
          min="0"
          max="10000000"
          step={1000}
          value={range2}
          onChange={(e) => setRange2(Number(e.target.value))}
          className={styles.slider}
        />
        <div className={`${styles.sliderTrack} slider-track`}></div>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <span>{formatCurrency(range1)}</span>
        </div>
        <span>Đến</span>
        <div className={styles.inputWrapper}>
          <span>{formatCurrency(range2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
