// components/QuantityCount.tsx
"use client";

import { useState } from 'react';
import styles from '../../../styles/QuantityCount.module.css';

interface QuantityCountProps {
  initialQuantity?: number;
  onQuantityChange?: (quantity: number) => void;
}

export default function QuantityCount({ initialQuantity = 1, onQuantityChange }: QuantityCountProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (onQuantityChange) onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onQuantityChange) onQuantityChange(newQuantity);
    }
  };

  return (
    <div className={styles.quantityCount}>
      <button onClick={handleIncrement}>+</button>
      <span>{quantity}</span>
      <button onClick={handleDecrement}>-</button>
  </div>
  );
}
