import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../../styles/ProductListItem.module.css'
import Image from 'next/image'
import { faCartArrowDown, faHome } from '@fortawesome/free-solid-svg-icons'

const ProductListItem = () => {
  return (
    <div className={styles.productListContainer}>
      <Image
        src="/proitem1.jpg"
        alt="Sản phẩm"
        width={2000}
        height={2000}
      ></Image>
      <div className={styles.productListItems}>
        <span className={styles.productName}>
          XBOX Series Wireless Controller - Fire Vapor
        </span>
        <span className={styles.productPrice}>1.850.000đ</span>
        <label className={styles.productDesc}>
          Mô tả: <span>Một game cực hay...</span>
        </label>
      </div>
      <div className={styles.productListItems}>
        <FontAwesomeIcon icon={faCartArrowDown} className={styles.btnIcon} />
        <button className={styles.btnAddToCart}>Thêm vào giỏ hàng</button>
      </div>
    </div>
  )
}

export default ProductListItem
