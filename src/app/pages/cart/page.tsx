"use client";

import { useState } from 'react';
import styles from '../../../../styles/Cart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faX } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  // Initial quantities for each product row
  const initialQuantities = [1, 1];
  const [quantities, setQuantities] = useState(initialQuantities);

  const handleIncrement = (index: any) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index: any) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const products = [
    {
      name: 'Xbox Series Wireless Controller - Fire Vapor',
      details: 'Chi tiết: Đây là một món đồ chơi rất hay',
      price: 1850000
    },
    {
      name: 'Xbox Series Wireless Controller - Fire Vapor',
      details: 'Chi tiết: Đây là một món đồ chơi rất hay',
      price: 1850000
    }
  ];

  return (
    <div>
      <table className={styles.tableContent}>
        <thead className={styles.tableHeader}>
          <tr className={styles.tableRows}>
            <th className={styles.tableDatas}>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tất cả</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {products.map((product, index) => (
            <tr className={styles.tableRows} key={index}>
              <td className={styles.tableProduct}>
                <div className={styles.tableProductImage}></div>
                <div className={styles.tableProductInfo}>
                  <span>{product.name}</span>
                  <span>{product.details}</span>
                </div>
              </td>
              <td className={styles.tablePrice}>{product.price.toLocaleString()}đ</td>
              <td className={styles.tableQuantity}>
                <div className={styles.quantityCount}>
                  <button onClick={() => handleIncrement(index)}>+</button>  
                  <span>{quantities[index]}</span>
                  <button onClick={() => handleDecrement(index)}>-</button>
                </div>
              </td>
              <td className={styles.tableTotal}>{(product.price * quantities[index]).toLocaleString()}đ</td>
              <td className={styles.tableAction}>
                <button>
                  <FontAwesomeIcon icon={faX} />            
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.cartTotal}>
        <div className={styles.payContent}>
          <label>Tiền hàng hóa: <span>{(products.reduce((total, product, index) => total + (product.price * quantities[index]), 0)).toLocaleString()}đ</span></label>
          <label>Giảm giá: <span>0</span></label>
          <label>Tạm tính: <span>{(products.reduce((total, product, index) => total + (product.price * quantities[index]), 0)).toLocaleString()}đ</span></label>
          <label><input type="checkbox"/>Tôi đã đọc và đồng ý chính sách bảo mật và điều kiện thanh toán</label>
          <button>THANH TOÁN</button>
          <label>Đăng nhập hoặc đăng ký để nhận thêm nhiều thông tin ưu đãi hơn</label>
        </div>
      </div>
    </div>
  );
}
