'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../../../styles/HistoryOrder.module.css'
import {
  faCircleUser,
  faClockRotateLeft,
  faHeart,
  faRightFromBracket,
  faX,
} from '@fortawesome/free-solid-svg-icons'

export default function HistoryOrder() {
  // Initial quantities for each product row
  const initialQuantities = [1, 1]
  const [quantities, setQuantities] = useState(initialQuantities)

  const handleIncrement = (index: any) => {
    const newQuantities = [...quantities]
    newQuantities[index] += 1
    setQuantities(newQuantities)
  }

  const handleDecrement = (index: any) => {
    const newQuantities = [...quantities]
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1
      setQuantities(newQuantities)
    }
  }

  const products = [
    {
      orderid: '892146',
      date: '08/11/2023',
      name: 'Xbox Series Wireless Controller - Fire Vapor, Elden Ring + Shadow of The Erdtree (DLC), ... +1',
      total: 5550000,
      status: 'Đã giao',
    },
    {
      orderid: '892146',
      date: '08/11/2023',
      name: 'Xbox Series Wireless Controller - Fire Vapor, Elden Ring + Shadow of The Erdtree (DLC), ... +1',
      total: 5550000,
      status: 'Đã nhận',
    },
    {
      orderid: '892146',
      date: '08/11/2023',
      name: 'Xbox Series Wireless Controller - Fire Vapor, Elden Ring + Shadow of The Erdtree (DLC), ... +1',
      total: 5550000,
      status: 'Đã giao',
    },
    {
      orderid: '892146',
      date: '08/11/2023',
      name: 'Xbox Series Wireless Controller - Fire Vapor, Elden Ring + Shadow of The Erdtree (DLC), ... +1',
      total: 5550000,
      status: 'Đã giao',
    },
    {
      orderid: '892146',
      date: '08/11/2023',
      name: 'Xbox Series Wireless Controller - Fire Vapor, Elden Ring + Shadow of The Erdtree (DLC), ... +1',
      total: 5550000,
      status: 'Đã giao',
    },
  ]

  return (
    <div className={styles.historyWrapper}>
      <h2 className={styles.historyTitle}>Lịch sử mua hàng</h2>
      <div>
        <table className={styles.tableContent}>
          <thead className={styles.tableHeader}>
            <tr className={styles.tableRows}>
              <th className={styles.tableDatas}>Ngày mua</th>
              <th>Mã đơn hàng</th>
              <th>Sản phẩm</th>
              <th>Tổng tiền</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {products.map((product, index) => (
              <tr className={styles.tableRows} key={product.name + index}>
                <td className={styles.tableDate}>{product.date}</td>
                <td className={styles.tableId}>
                  {product.orderid.toLocaleString()}
                </td>
                <td className={styles.tableProduct}>
                  <span>{product.name}</span>
                </td>
                <td className={styles.tableTotal}>
                  {product.total.toLocaleString()}VNĐ
                </td>
                <td className={styles.tableStatus}>
                  {product.status == 'Đã nhận' ? (
                    <span className={styles.statusCheck}>{product.status}</span>
                  ) : (
                    <span className={styles.statusDelivered}>
                      {product.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
