'use client'
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/CategoryFilter.module.css'
import ProductCard from './ProductCard'

const CategoryFilter = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 12
  const productCount = 13 // Tổng số lượng sản phẩm (có thể thay đổi)
  const totalPages = Math.ceil(productCount / itemsPerPage)

  const handleClick = (index: any) => {
    if (activeIndex === index) {
      setActiveIndex(null) // Bỏ class active nếu item đang active
    } else {
      setActiveIndex(index) // Đặt item đó làm active nếu chưa active
    }
  }

  const renderProductCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const cards = []

    for (let i = startIndex; i < endIndex && i < productCount; i++) {
      cards.push(<ProductCard key={i} />)
    }

    return cards
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const renderPagination = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.pageButton} ${
            currentPage === i ? styles.activePage : ''
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      )
    }

    return (
      <div className={styles.paginationWrapper}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.pageNavButton}
        >
          &lt;
        </button>
        {pages}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.pageNavButton}
        >
          &gt;
        </button>
      </div>
    )
  }

  return (
    <div className={styles.categoryPageWrapper}>
      <div className={styles.filterComponentBody}>
        <div className={styles.filterComponentNav}>
          <ul className={styles.filterComponentFilter}>
            <li>Filter by:</li>
            <li
              className={`${styles.filterItems} ${
                activeIndex === 0 ? styles.active : ''
              }`}
              onClick={() => handleClick(0)}
            >
              <Link href="" className={styles.filterLink}>
                <span>Thể loại</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={styles.filterIcon}
                />
              </Link>
            </li>
            <li
              className={`${styles.filterItems} ${
                activeIndex === 1 ? styles.active : ''
              }`}
              onClick={() => handleClick(1)}
            >
              <Link href="" className={styles.filterLink}>
                <span>Nền tảng</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={styles.filterIcon}
                />
              </Link>
            </li>
            <li
              className={`${styles.filterItems} ${
                activeIndex === 2 ? styles.active : ''
              }`}
              onClick={() => handleClick(2)}
            >
              <Link href="" className={styles.filterLink}>
                <span>Năm phát hành</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={styles.filterIcon}
                />
              </Link>
            </li>
            <li
              className={`${styles.filterItems} ${
                activeIndex === 3 ? styles.active : ''
              }`}
              onClick={() => handleClick(3)}
            >
              <Link href="" className={styles.filterLink}>
                <span>Giá tiền</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={styles.filterIcon}
                />
              </Link>
            </li>
            <li
              className={`${styles.filterItems} ${
                activeIndex === 4 ? styles.active : ''
              }`}
              onClick={() => handleClick(4)}
            >
              <Link href="" className={styles.filterLink}>
                <span>Trạng thái</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={styles.filterIcon}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.filterMenuContainer}>
          <div
            className={`${styles.filterMenuItems} ${
              activeIndex === 0 ? styles.active : styles.inactive
            }`}
          >
            <div className={styles.filterMenuLinkList}></div>
          </div>
          <div
            className={`${styles.filterMenuItems} ${
              activeIndex === 1 ? styles.active : styles.inactive
            }`}
          >
            <ul className={styles.filterMenuLinkList}>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Bắn súng
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
              <li className={styles.filterMenuLinkListItem}>
                <Link href="/" className={styles.filterMenuLinkListLink}>
                  Anime
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.filterMenuItems} ${
              activeIndex === 2 ? styles.active : styles.inactive
            }`}
          >
            <div className={styles.filterMenuLinkList}></div>
          </div>
        </div>
      </div>
      <div className={styles.filterComponentList}>{renderProductCards()}</div>
      {renderPagination()}
    </div>
  )
}

export default CategoryFilter
