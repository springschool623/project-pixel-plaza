import React from 'react'
import Link from 'next/link'
import styles from '../../../styles/HomePageList.module.css'
import ProductCard from './ProductCard'

const AllItemList = ({ productCount }: any) => {
  const renderProductCards = () => {
    const cards = []
    for (let i = 0; i < productCount; i++) {
      cards.push(<ProductCard key={i} />)
    }
    return cards
  }

  return (
    <div className={styles.listContent}>
      <div className={`${styles.listCover} ${styles.allItemListCover}`}>
        {renderProductCards()}
      </div>
    </div>
  )
}

export default AllItemList
